import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IDeals } from '../interfaces/IDeals';
import styles from './Deals.module.css';
import DealsForm from './DealsForm';
import DealsList from './DealsList';

const Deals: FC = () => {
  const [deals, setDeals] = useState<IDeals[]>([]);

  useEffect(() => {
    // Get random deals from API
    const getDeals = async () => {
      try {
        const res = await axios.get('https://www.cheapshark.com/api/1.0/deals');
        const deals: IDeals[] = [];
        res.data.map((deal: any) => {
          deals.push({
            dealID: deal.dealID,
            salePrice: parseFloat(deal.salePrice),
            savings: parseFloat(deal.savings),
            thumb: deal.thumb,
            title: deal.title,
          });
        });

        setDeals(deals);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
        } else {
          console.error('Unexcpected error');
        }
      }
    };

    getDeals();
  }, []);

  return (
    <div className={styles.container}>
      <DealsForm></DealsForm>
      <DealsList></DealsList>
    </div>
  );
};

export default Deals;
