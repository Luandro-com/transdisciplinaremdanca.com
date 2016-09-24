/**
*
* Logo
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <h1><FormattedMessage {...messages.header} /></h1>
    </div>
  );
}

Logo.propTypes = {
  data: React.PropTypes.string,
};

export default Logo;
