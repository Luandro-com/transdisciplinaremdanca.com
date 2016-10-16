/**
*
* Decorations
*
*/

import React from 'react';


import styles from './styles.css';

function Decorations() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.d1}></div>
        <div className={styles.d2}></div>
        <div className={styles.d3}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.d3}></div>
        <div className={styles.d2}></div>
        <div className={styles.d1}></div>
      </div>
    </div>
  );
}

export default Decorations;
