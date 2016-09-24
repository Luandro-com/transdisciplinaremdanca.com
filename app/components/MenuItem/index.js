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
    <div className={styles.menuItem}>
      {title}
    </div>
  );
}

MenuItem.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default MenuItem;
