import React, { FC } from 'react';
import styles from './Deals.module.css';
import DealsForm from './DealsForm';

const Deals: FC = () => {
  return (
    <div className={styles.container}>
      <DealsForm></DealsForm>
    </div>
  );
};

export default Deals;
