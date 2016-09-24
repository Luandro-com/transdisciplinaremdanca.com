/**
*
* ArrowButton
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.css';

function ArrowButton() {
  return (
    <div className={styles.wrapper}>
    </div>
  );
}

ArrowButton.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default ArrowButton;
