/**
*
* Decorations
*
*/

import React from 'react';


import styles from './styles.css';

function Decorations() {
  return (
    <div className={styles.decorations}>
    </div>
  );
}

Decorations.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default Decorations;
