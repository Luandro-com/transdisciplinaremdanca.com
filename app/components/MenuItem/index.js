/**
*
* MenuItem
*
*/

import React from 'react';
import { Link } from 'react-router';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.css';

function MenuItem({ title, slug, active }) {
  return (
    <Link className={styles.wrapper} to={`/c/${slug}`}>
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
        <div className={active ? styles.active : styles.inactive}></div>
      </div>
      <div className={styles.detail}></div>
    </Link>
  );
}

MenuItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string.isRequired,
  slug: React.PropTypes.bool,
};

export default MenuItem;
