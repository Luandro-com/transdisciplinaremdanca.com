/**
*
* CategoryItem
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function CategoryItem() {
  return (
    <div className={styles.categoryItem}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CategoryItem.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default CategoryItem;
