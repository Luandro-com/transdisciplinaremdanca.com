/**
*
* LatestList
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Item from 'components/LatestItem';
import ArrowButton from 'components/ArrowButton';

import styles from './styles.css';

function LatestList({ posts }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {(posts.map(item => <Item key={item.id} {...item} />))}
      </div>
      {(posts && posts.length > 3) && <ArrowButton action={() => console.log('Load more!!')} />}
    </div>
  );
}

LatestList.propTypes = {
  posts: React.PropTypes.array,
};

LatestList.defaultProps = {
  posts: [
    {
      id: '000',
      title: 'Carregando...',
      category: 'Media',
      media: '',
      created: '',
    },
    {
      id: '001',
      title: 'Carregando...',
      category: 'Media',
      media: '',
      created: '',
    },
    {
      id: '002',
      title: 'Carregando...',
      category: 'Media',
      media: '',
      created: '',
    },
    // {
    //   id: '003',
    //   title: 'Carregando...',
    //   category: 'Media',
    //   media: '',
    //   created: '',
    // },
  ],
};

export default LatestList;
