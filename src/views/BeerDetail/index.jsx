/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { getBeerById } from '../../services/BeerService';
import { useParams } from 'react-router-dom';

export const BeerDetail = ({id}) => {
  const { beerId } = useParams();
  const currentId = beerId || id
  const [loading, setLoading] = useState(true);
  const [beer, setBeer] = useState({});

  useEffect(() => {
    getBeerById(currentId)
      .then((beerDB) => {
        setLoading(false);
        setBeer(beerDB);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentId]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-detail">
          <img src={beer.image_url} alt="beerImage" />
          <div className="card-detail-content">
            <h3>{beer.name}</h3>
            <h5>{beer.tagline}</h5>
            <div className="main-details">
              <span id="first-brewed">{beer.first_brewed}</span>
              <br></br>
              <span id="attenuation_level">{beer.attenuation_level}</span>
            </div>
            <p>{beer.description}</p>
            <h6>{beer.contributed_by}</h6>
          </div>
        </div>
      )}
    </div>
  );
};
