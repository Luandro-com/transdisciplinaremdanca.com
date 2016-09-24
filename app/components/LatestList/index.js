/**
*
* LatestList
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function LatestList() {
  return (
    <div className={styles.latestList}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LatestList.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default LatestList;
