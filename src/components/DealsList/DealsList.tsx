import React, { FC } from 'react';
import { IDeals } from '../../interfaces';
import Deal from '../Deal/Deal';
import styles from './DealsList.module.css';

interface Props {
  deals: IDeals[];
}

const DealsList: FC<Props> = ({ deals }) => {
  return (
    <div className={styles.container}>
      {deals.map((deal: IDeals) => (
        <Deal key={deal.dealID} deal={deal}></Deal>
      ))}
    </div>
  );
};

export default DealsList;
