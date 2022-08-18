import React from 'react';
import styles from './SearchFailed.module.css';
import searchFailedIcon from '../../img/search-failed.svg';

const SearchFailed = () => {
  return (
    <div className={styles.container}>
      <img className={styles.search_failed_icon} src={searchFailedIcon} alt="searchFailed" />
      <div className={styles.search_failed_message}>No matching resulst were found</div>
    </div>
  );
};

export default SearchFailed;
