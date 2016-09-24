/*
 *
 * LatestPosts
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLatestPosts from './selectors';

export class LatestPosts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = selectLatestPosts();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestPosts);
