import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IDeals } from '../interfaces';
import styles from './Deals.module.css';
import DealsForm from './DealsForm';
import DealsList from './DealsList';
import Spinner from './utility/Spinner';
import { SearchData } from '../types';

const Deals: FC = () => {
  const [deals, setDeals] = useState<IDeals[]>([]);

  // Utility function to get game deals with optional user provided parameters.
  const getDeals = async (title?: string, minPrice?: number) => {
    try {
      const res = await axios.get('https://www.cheapshark.com/api/1.0/deals', {
        params: {
          ...(title && {
            title: title,
          }),
          ...(minPrice && {
            upperPrice: minPrice,
          }),
        },
      });

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
  useEffect(() => {
    // Get random deals from API
    getDeals();
  }, []);

  // Get specifyc deals based on user input
  const handleSearch = (searchData: SearchData): void => {
    const { title, minPrice } = searchData;
    getDeals(title, minPrice);
  };

  return (
    <div className={styles.container}>
      <DealsForm handleSearch={handleSearch}></DealsForm>
      {deals.length > 0 ? (
        <DealsList deals={deals}></DealsList>
      ) : (
        <div className={styles.spinner_container}>
          <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};

export default Deals;
