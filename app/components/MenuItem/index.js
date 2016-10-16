/**
*
* MenuItem
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.css';

function MenuItem({ title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.inner}></div>
        <div className={styles.circs}>
          <div className={styles.circS}></div>
          <div className={styles.circB}></div>
          <div className={styles.circS}></div>
        </div>
      </div>
      <div className={styles.text}>
        {title}
        <div className={styles.active}></div>
      </div>
      <div className={styles.detail}></div>
    </div>
  );
}

MenuItem.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default MenuItem;
