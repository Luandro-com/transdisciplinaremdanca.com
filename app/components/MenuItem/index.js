/**
*
* MenuItem
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function MenuItem() {
  return (
    <div className={styles.menuItem}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MenuItem.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default MenuItem;
