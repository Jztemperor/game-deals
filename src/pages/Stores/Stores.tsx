import React, { useEffect, useState } from 'react';
import styles from './Stores.module.css';
import { IStores } from '../../interfaces';
import axios from 'axios';
import Store from '../../components/Store/Store';
import Spinner from '../../components/utility/Spinner';
import SearchFailed from '../../components/utility/SearchFailed';

const Stores = () => {
  const [stores, setStores] = useState<IStores[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Get stores
  const getStores = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://www.cheapshark.com/api/1.0/stores');

      // Check if we got any data
      if (res.data) {
        setLoading(false);
      }

      const stores: IStores[] = [];
      res.data.map((store: any) => {
        stores.push({
          storeID: store.storeID,
          storeName: store.storeName,
          image: store.images.logo,
        });
      });

      setStores(stores);
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
    // Get stores from API
    getStores();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.spinner_container}>
          <Spinner></Spinner>
        </div>
      ) : error || stores.length === 0 ? (
        <div className={styles.spinner_container}>
          <SearchFailed></SearchFailed>
        </div>
      ) : (
        <div className={styles.container}>
          {stores.map((store) => (
            <Store key={store.storeID} store={store}></Store>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stores;
