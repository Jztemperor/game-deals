import React, { Fragment } from 'react';
import styles from './DealsForm.module.css';
import search from '../img/search.svg';

const DealsForm = () => {
  return (
    <Fragment>
      <div className={styles.header_container}>
        <h1>
          Let&apos;s find some deals{' '}
          <img className={styles.header_icon} src={search} alt="Search..." />
        </h1>
      </div>
      <div className={styles.form_container}>
        <form action="">
          <div className={styles.input_group}>
            <label htmlFor="title">Game title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Search a game by name"
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="minPrice">Minimum price</label>
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder="Minimum price (optional)"
            />
          </div>
          <button className={styles.submit} type="submit">
            Search
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default DealsForm;
