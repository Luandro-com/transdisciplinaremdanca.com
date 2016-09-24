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
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Logo.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default Logo;
