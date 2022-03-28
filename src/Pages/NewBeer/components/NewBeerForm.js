import React, { useState } from 'react';
import styles from './NewBeerForm.module.css';

const BeerID = ({ postBeers }) => {
  const [data, setData] = useState();

  const handleChange = (event) => {
    const { value, name } = event.target;

    setData({
      ...data,
      [name]: typeof value === 'string' ? value : Number(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBeers(data);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" type="text" onChange={handleChange} />
          <label>Tagline</label>
          <input name="tagline" type="text" onChange={handleChange} />
          <label>Description</label>
          <input name="description" type="text" onChange={handleChange} />
          <label>First brewed</label>
          <input name="first_brewed" type="text" onChange={handleChange} />
          <label>Brewers tips</label>
          <input name="brewers_tips" type="text" onChange={handleChange} />
          <label>Attenuation level</label>
          <input
            name="attenuation_level"
            type="number"
            onChange={handleChange}
          />
          <label>Contributed by</label>
          <input name="contributed_by" type="text" onChange={handleChange} />
          <button>submit</button>
        </form>
      </div>
    </>
  );
};

export default BeerID;
