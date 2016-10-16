/**
*
* MenuList
*
*/

import React from 'react';
import Loader from 'halogen/ScaleLoader';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Item from 'components/MenuItem';

import styles from './styles.css';

function MenuList({ categories }) {
  return (
    <div className={styles.wrapper}>
      {(!categories || categories.length < 1) &&
        <Loader color={'pink'} />
      }
      {(categories && categories.length > 0) &&
        categories.map(item => <Item key={item.id} {...item} />)
      }
    </div>
  );
}

MenuList.propTypes = {
  categories: React.PropTypes.array,
};

export default MenuList;
