/**
*
* LatestItem
*
*/

import React from 'react';
import { Link } from 'react-router';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.css';

function LatestItem({ title, category, media, created, slug }) {
  return (
    <Link to={`/p/${slug}`} className={styles.wrapper} style={(media.length > 0) ? { background: `url(${media}) no-repeat`, backgroundSize: 'cover' } : { background: 'rgba(255,255,255,0.25)' }}>
      <div className={styles.border} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{created}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
}

LatestItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  media: React.PropTypes.string.isRequired,
  created: React.PropTypes.string.isRequired,
};

export default LatestItem;
