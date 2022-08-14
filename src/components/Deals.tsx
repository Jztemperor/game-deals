import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IDeals } from '../interfaces';
import styles from './Deals.module.css';
import DealsForm from './DealsForm';
import DealsList from './DealsList';
import Spinner from './utility/Spinner';
import { SearchData } from '../types';
import Reset from './utility/Reset';

const Deals: FC = () => {
  const [deals, setDeals] = useState<IDeals[]>([]);
  const [resetVisible, setResetVisible] = useState<boolean>(false);

  //Get game deals with optional user provided parameters.
  const getDeals = async (title?: string, minPrice?: number) => {
    try {
      // Get deals sorted by how good the deal rating is
      const res = await axios.get('https://www.cheapshark.com/api/1.0/deals', {
        params: {
          ...(title && {
            title: title,
          }),
          ...(minPrice && {
            upperPrice: minPrice,
          }),
          sortBy: 'Deal Rating',
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
    setResetVisible(true);
  };

  // Reset deals
  const resetDeals = () => {
    setTimeout(() => {
      getDeals();
    }, 1700);
    setResetVisible(false);
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
      <Reset onClick={resetDeals} className={resetVisible ? styles.visible : styles.hidden}></Reset>
    </div>
  );
};

export default Deals;
