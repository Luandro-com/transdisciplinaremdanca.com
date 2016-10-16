/**
*
* MenuLayout
* by Luandro | 2016
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Logo from 'components/Logo';
import List from 'components/MenuList';
import Subscribe from 'components/Subscribe';
import Footer from 'components/MenuFooter';

import styles from './styles.css';

class MenuLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    open: (window.screen.width > 767),
    categories: [{ id: 1, title: 'Início' }],
  }

  static propTypes = {
    open: React.PropTypes.bool,
    categories: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  render() {
    const { open, categories } = this.props;
    return (
      <div className={styles.wrapper}>
        <div
          style={open ? { display: 'flex' } : { display: 'none' }}
          className={styles.container}
        >
          <Logo />
          <List categories={categories} />
          <Subscribe />
          <Footer />
        </div>
      </div>
    );
  }
}

export default MenuLayout;
