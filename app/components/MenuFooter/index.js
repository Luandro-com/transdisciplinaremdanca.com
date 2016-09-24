/**
*
* MenuFooter
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function MenuFooter() {
  return (
    <footer className={styles.wrapper}>
      <FormattedMessage {...messages.header} />
      <h4>por Luandro</h4>
    </footer>
  );
}

MenuFooter.propTypes = {
  data: React.PropTypes.string,
};

export default MenuFooter;
