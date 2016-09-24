/**
*
* PostHeader
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function PostHeader() {
  return (
    <div className={styles.postHeader}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PostHeader.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default PostHeader;
