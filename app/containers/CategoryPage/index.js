/*
 *
 * CategoryPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectCategoryPage from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import List from 'components/CategoryList';
import LatestPosts from 'containers/LatestPosts';

import styles from './styles.css';

export class CategoryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.wrapper}>
        <Helmet
          title=""
          meta={[
            { name: 'description', content: 'Description of CategoryPage' },
          ]}
        />
        <List {...this.props} />
        <LatestPosts />
      </div>
    );
  }
}

const mapStateToProps = selectCategoryPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
