/*
 *
 * Menu
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import selectMenu from './selectors';
import { toggleMenu } from './actions';

import MenuLayout from 'components/MenuLayout';

export class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return <MenuLayout {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  open: selectMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
