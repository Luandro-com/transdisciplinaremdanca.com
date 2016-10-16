/**
*
* LayoutWrapper
* by Luandro | 2016
*
*/

import React from 'react';

import Decorations from 'components/Decorations';

import styles from './styles.css';

class LayoutWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Decorations />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

export default LayoutWrapper;
