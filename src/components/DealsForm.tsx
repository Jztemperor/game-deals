import React, { Fragment, useState } from 'react';
import styles from './DealsForm.module.css';
import search from '../img/search.svg';
import { SearchData } from '../types';

interface Props {
  handleSearch: (searchData: SearchData) => void;
}

const DealsForm = ({ handleSearch }: Props) => {
  const [title, setTitle] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>();

  // Passes form data to "Deals" component
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: SearchData = {
      title: title,
      minPrice: minPrice,
    };
    handleSearch(formData);
  };

  return (
    <Fragment>
      <div className={styles.header_container}>
        <h1>
          Let&apos;s find some deals{' '}
          <img className={styles.header_icon} src={search} alt="Search..." />
        </h1>
      </div>
      <div className={styles.form_container}>
        <form onSubmit={onSubmit}>
          <div className={styles.input_group}>
            <label htmlFor="title">Game title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Search a game by name"
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
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
