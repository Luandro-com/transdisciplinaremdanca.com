/**
*
* Logo
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LogoImg from './logo.png';

import styles from './styles.css';

function Logo() {
  return (
    <div className={styles.wrapper}>
      <h1><FormattedMessage {...messages.header} /></h1>
      <img src={LogoImg} alt={'Logo'} />
    </div>
  );
}

Logo.propTypes = {
  data: React.PropTypes.string,
};

export default Logo;
