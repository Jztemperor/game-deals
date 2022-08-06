import React, { FC } from 'react';
import styles from './Deal.module.css';
import { IDeals } from '../interfaces/IDeals';

interface Props {
  deal: IDeals;
}

const Deal: FC<Props> = ({ deal }) => {
  console.log(deal);
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{deal.title}</h5>
      <div className={styles.info_container}>
        <div className={styles.info_container_text}>
          <p>Deal:</p>
          <p className={styles.price}>{deal.salePrice} $</p>
        </div>
        <div className={styles.info_container_img}>
          <img src={deal.thumb} alt="" />
        </div>
      </div>
      <a
        href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
        className={styles.btn}
        target="_blank"
        rel="noreferrer">
        check deals
      </a>
    </div>
  );
};

export default Deal;
