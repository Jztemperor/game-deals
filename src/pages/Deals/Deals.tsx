import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IDeals } from '../../interfaces';
import styles from './Deals.module.css';
import DealsForm from '../../components/DealsForm/DealsForm';
import DealsList from '../../components/DealsList/DealsList';
import Spinner from '../../components/utility/Spinner';
import { SearchData } from '../../types';
import Reset from '../../components/utility/Reset';
import SearchFailed from '../../components/utility/SearchFailed';

const Deals: FC = () => {
  const [deals, setDeals] = useState<IDeals[]>([]);
  const [resetVisible, setResetVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  //Get game deals with optional user provided parameters.
  const getDeals = async (title?: string, minPrice?: number) => {
    try {
      // Get deals sorted by how good the deal rating is
      setLoading(true);
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

      // Check if we got any data
      if (res.data) {
        setLoading(false);
      }

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
      setLoading(false);
      setError(true);
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
    getDeals();
    setResetVisible(false);
  };

  return (
    <div className={styles.container}>
      <DealsForm handleSearch={handleSearch}></DealsForm>

      {loading ? (
        <div className={styles.spinner_container}>
          <Spinner></Spinner>
        </div>
      ) : error || deals.length === 0 ? (
        <div className={styles.spinner_container}>
          <SearchFailed></SearchFailed>
        </div>
      ) : (
        <DealsList deals={deals}></DealsList>
      )}

      <Reset onClick={resetDeals} className={resetVisible ? styles.visible : styles.hidden}></Reset>
    </div>
  );
};

export default Deals;
