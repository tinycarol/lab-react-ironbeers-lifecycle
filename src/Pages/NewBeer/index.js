import React from 'react';
import NewBeerForm from './components/NewBeerForm';
import axios from 'axios';

function NewBeer() {
  const postBeers = async (formData) => {
    await axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, formData)
      .then((resp) => console.log(resp.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <NewBeerForm postBeers={postBeers} />
    </div>
  );
}

export default NewBeer;
