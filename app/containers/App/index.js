/**
 *
 * App.react.js
 *
 * by Luandro | 2016
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

/**
 * TODO: Create/control state for color animation over time.
 */

import React from 'react';
import LayoutWrapper from 'components/LayoutWrapper';
import Menu from 'containers/Menu';
import styles from './styles.css';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <LayoutWrapper>
          <Menu />
          {React.Children.toArray(this.props.children)}
        </LayoutWrapper>
      </div>
    );
  }
}
