import React, { useState } from 'react';
import Beer from '../Beer/Beer';
import { useQuery } from 'react-query';
import { getBeers } from '../../constants';

console.log(getBeers());

const BeerList = () => {
  const [loading, setLoading] = useState(true);

  const { isLoading, isError, data, error } = useQuery('beers', getBeers);

  if (isLoading) {
    return (
      <div className="spinner-border text-primary mt-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data.map((item) => (
        <Beer key={item._id} {...item} />
      ))}
    </>
  );
};

export default BeerList;
