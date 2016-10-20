/**
*
* LatestList
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Detail from './detail.svg';
import Example from './example.jpg';

import Item from 'components/LatestItem';
import ArrowButton from 'components/ArrowButton';

import styles from './styles.css';

function LatestList({ posts }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.detail}>
        <div className={styles.circle}></div>
        <img className={styles.circleBorder} src={Detail} alt="detail" />
      </div>
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
      media: Example,
      created: '',
      slug: 'item-slug',
    },
    {
      id: '001',
      title: 'Carregando...',
      category: 'Media',
      media: Example,
      created: '',
      slug: 'item-slug',
    },
    {
      id: '002',
      title: 'Carregando...',
      category: 'Media',
      media: Example,
      created: '',
      slug: 'item-slug',
    },
    {
      id: '004',
      title: 'Carregando...',
      category: 'Media',
      media: Example,
      created: '',
      slug: 'item-slug',
    },
  ],
};

export default LatestList;
