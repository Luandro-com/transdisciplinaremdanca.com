/**
*
* CategoryList
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Item from 'components/CategoryItem';

import styles from './styles.css';

function CategoryList({ name, posts }) {
  return (
    <div className={styles.categoryList}>
      <h1>{name}</h1>
      {posts.map(item => <Item key={item.id} {...item} />)}
    </div>
  );
}

CategoryList.propTypes = {
  name: React.PropTypes.string,
  posts: React.PropTypes.array,
};

CategoryList.defaultProps = {
  name: 'Category name',
  posts: [
    {
      id: '000',
      title: 'Carregando...',
    },
  ],
};

export default CategoryList;
