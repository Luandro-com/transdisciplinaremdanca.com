/**
*
* LatestItem
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function LatestItem() {
  return (
    <div className={styles.latestItem}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LatestItem.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default LatestItem;
