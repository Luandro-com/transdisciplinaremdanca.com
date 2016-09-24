/**
*
* PostBody
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function PostBody() {
  return (
    <div className={styles.postBody}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PostBody.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default PostBody;
