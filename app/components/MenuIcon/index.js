/**
*
* MenuIcon
*
*/

import React from 'react';


import styles from './styles.css';

function MenuIcon() {
  return <div className={styles.wrapper} />;
}

MenuIcon.propTypes = {
  data: React.PropTypes.string,
};

export default MenuIcon;
