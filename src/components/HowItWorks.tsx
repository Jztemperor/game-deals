import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How it works?</h1>
      <ul>
        <li>Data provided by Cheapshark</li>
        <li>UI created in React</li>
        <li>Design inspired by Desiré</li>
      </ul>
    </div>
  );
};

export default HowItWorks;
