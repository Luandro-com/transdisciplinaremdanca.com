/*
 *
 * Menu
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectMenu from './selectors';

import MenuLayout from 'components/MenuLayout';

export class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return <MenuLayout {...this.props} />;
  }
}

const mapStateToProps = selectMenu();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
