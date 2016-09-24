/**
*
* HomeScreen
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function HomeScreen() {
  return (
    <div className={styles.homeScreen}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

HomeScreen.propTypes = {
  data: React.PropTypes.string,
};

export default HomeScreen;
