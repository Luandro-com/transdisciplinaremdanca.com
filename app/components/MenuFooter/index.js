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
    <div className={styles.menuFooter}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MenuFooter.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default MenuFooter;
