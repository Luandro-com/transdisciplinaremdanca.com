/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectHomePage from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import HomeScreen from 'components/HomeScreen';
import LatestPosts from 'containers/LatestPosts';

import styles from './styles.css';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.wrapper}>
        <Helmet
          title={'Início'}
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <HomeScreen />
        <LatestPosts />
      </div>
    );
  }
}

const mapStateToProps = selectHomePage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
