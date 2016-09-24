/**
*
* CategoryItem
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function CategoryItem({ title }) {
  return (
    <div className={styles.categoryItem}>
      <FormattedMessage {...messages.header} />
      {title}
    </div>
  );
}

CategoryItem.propTypes = {
  title: React.PropTypes.string,
};

export default CategoryItem;
