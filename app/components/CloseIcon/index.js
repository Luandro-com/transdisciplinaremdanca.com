/**
*
* CloseIcon
*
*/

import React from 'react';


import styles from './styles.css';

function CloseIcon() {
  return <div className={styles.wrapper} />;
}

CloseIcon.propTypes = {
  data: React.PropTypes.string,
};

export default CloseIcon;
