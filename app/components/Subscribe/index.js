/**
*
* Subscribe
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <FormattedMessage {...messages.header} />
      <input />
    </div>
  );
}

Subscribe.propTypes = {
  data: React.PropTypes.string,
};

export default Subscribe;
