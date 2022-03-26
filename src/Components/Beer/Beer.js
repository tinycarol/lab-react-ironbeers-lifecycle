import React from 'react';
import styles from '../Beer/Beer.module.css';

const renderBeers = (beers) => {
  return (
    <>
      {beers &&
        beers.map((beer, i) => {
          return (
            <div key={i}>
              <div className={styles.container}>
                <div className={styles.img_container}>
                  <img
                    className={styles.beer_image}
                    src={`${beer.image_url}`}
                    alt="blah"
                  />
                </div>
                <div className={styles.text_content}>
                  <div className={styles.beer_name}>{beer.name}</div>
                  <div className={styles.tagline}>{beer.tagline} </div>
                  <div className={styles.contribution}>
                    Created by: {beer.contributed_by}
                  </div>
                </div>
                <br />
              </div>
              <hr className={styles.bor} />
            </div>
          );
        })}
    </>
  );
};

const Beer = ({ beers }) => {
  return (
    <>{beers && beers.length > 0 ? <>{renderBeers(beers)}</> : <>Loading</>}</>
  );
};

export default Beer;
