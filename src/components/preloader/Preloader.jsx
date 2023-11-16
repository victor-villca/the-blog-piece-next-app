import React from 'react';
import styles from './preloader.module.css'

const Preloader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
    </div>
    
  );
};

export default Preloader;
