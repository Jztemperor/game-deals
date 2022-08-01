import React, { FC } from 'react';
import styles from './Deals.module.css';
import DealsForm from './DealsForm';
import DealsList from './DealsList';

const Deals: FC = () => {
  return (
    <div className={styles.container}>
      <DealsForm></DealsForm>
      <DealsList></DealsList>
    </div>
  );
};

export default Deals;
