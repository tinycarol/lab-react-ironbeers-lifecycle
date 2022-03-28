import React from 'react';
import styles from './RandomBeer.module.css';
const renderBeer = ({
  name,
  image_url,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by,
}) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.img_container}>
        <img className={styles.img} src={image_url} alt="blah" />
      </div>
      <div className={styles.title}>
        <div className={styles.name}>{name}</div>
        <div className={styles.attenuation_level}>{attenuation_level}</div>
      </div>
      <div className={styles.subTitle}>
        <div className={styles.tagline}>{tagline}</div>
        <div className={styles.first_brewed}>{first_brewed}</div>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.contributed_by}>{contributed_by}</div>
    </div>
  );
};

const BeerID = ({ beer }) => {
  return (
    <>
      <div>{renderBeer(beer)}</div>
    </>
  );
};

export default BeerID;
