/**
*
* LatestItem
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.css';

function LatestItem({ title, category, media, created }) {
  return (
    <div className={styles.wrapper} style={(media.length > 0) ? { background: `url(${media})` } : { background: 'grey' }}>
      <div className={styles.border} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <span>{created}</span>
        <span>{category}</span>
      </div>
    </div>
  );
}

LatestItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  media: React.PropTypes.string.isRequired,
  created: React.PropTypes.string.isRequired,
};

export default LatestItem;
