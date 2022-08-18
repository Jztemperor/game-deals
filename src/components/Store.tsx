import { url } from 'inspector';
import React from 'react';
import { IStores } from '../interfaces';
import styles from './Store.module.css';

interface Props {
  store: IStores;
}

const Store = ({ store }: Props) => {
  return (
    <div className={styles.container}>
      <img src={`https://www.cheapshark.com/${store.image}`} alt="" />
    </div>
  );
};

export default Store;
