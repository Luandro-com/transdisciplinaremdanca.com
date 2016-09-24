/**
*
* CategoryList
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function CategoryList() {
  return (
    <div className={styles.categoryList}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CategoryList.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default CategoryList;
