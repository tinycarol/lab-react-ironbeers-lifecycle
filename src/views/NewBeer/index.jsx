import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createBeer } from '../../services/BeerService';
import "./index.css"

const INITIAL_VALUES = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: '',
  contributed_by: ''
}
export const NewBeer = () => {
  const navigate = useNavigate()
const [values, setValues] = useState(INITIAL_VALUES);
  const handleSubmitCreate = (event) =>{
    event.preventDefault()
    createBeer(values) 
    .then((response)=>{
      navigate("/beers")
      
    })
    .catch((err)=> console.log(err))

  }
  
  const handleOnChange = (event) => {
    const { value, name, type } = event.target
    setValues({
      ...values,
      [name]: type === 'number' ? Number(value) : value
    })
  }

  return (
    <div className='NewBeer'>
    <form onSubmit={handleSubmitCreate}>
    <label>Name</label>
    <input name="name" type="text" value={values.name} onChange={handleOnChange} ></input>
    <label>Tagline</label>
    <input  name="tagline" type="text" value={values.tagline} onChange={handleOnChange} ></input>
    <label>Description</label>
    <textarea  name="description" type="text" value={values.description} onChange={handleOnChange}></textarea>
    <label>First brewed</label>
    <input  name="first_brewed" type="text" value={values.first_brewed} onChange={handleOnChange}></input>
    <label>Brewers tips</label>
    <input  name="brewers_tips" type="text" value={values.brewers_tips} onChange={handleOnChange}></input>
    <label>Attenuation level</label>
    <input name="attenuation_level" type="number" value={values.attenuation_level} onChange={handleOnChange}></input>
    <label>Contributed by</label>
    <input  name="contributed_by" type="text" value={values.contributed_by} onChange={handleOnChange}></input>
    <button type="submit">ADD NEW</button>
    </form>
      
    </div>
  )
}
