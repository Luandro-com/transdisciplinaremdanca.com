/**
*
* MenuList
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function MenuList() {
  return (
    <div className={styles.menuList}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MenuList.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default MenuList;
