/*
 *
 * PostPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectPostPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LatestPosts from 'containers/LatestPosts';

import styles from './styles.css';

export class PostPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.wrapper}>
        <Helmet
          title="PostPage"
          meta={[
            { name: 'description', content: 'Description of PostPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <LatestPosts />
      </div>
    );
  }
}

const mapStateToProps = selectPostPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
