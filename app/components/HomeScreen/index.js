/**
*
* HomeScreen
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Logo from 'components/Logo';

import styles from './styles.css';

function HomeScreen() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  data: React.PropTypes.string,
};

export default HomeScreen;
