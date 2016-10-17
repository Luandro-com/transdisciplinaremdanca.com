/**
*
* MenuLayout
* by Luandro | 2016
*
*/

import React from 'react';
import { Link } from 'react-router';
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
    categories: [
      { id: 1, title: 'Início', slug: '1', active: true },
      { id: 2, title: 'Categoria 1', slug: '2', active: false },
      { id: 3, title: 'Categoria 2', slug: '3', active: false },
      { id: 4, title: 'Categoria 3', slug: '4', active: false },
      { id: 5, title: 'Categoria 4', slug: '5', active: false },
      { id: 6, title: 'Contato', slug: '6', active: false },
    ],
  }

  static propTypes = {
    open: React.PropTypes.bool,
    categories: React.PropTypes.arrayOf(React.PropTypes.object),
    toggleMenu: React.PropTypes.func,
  }

  render() {
    const { open, categories, toggleMenu } = this.props;
    console.log('OPEN', open);
    return (
      <div className={styles.wrapper}>
        <button className={styles.toggle} onClick={toggleMenu}>X</button>
        <div
          style={(!open && screen.width < 768) ? { display: 'none' } : { display: 'flex' }}
          className={styles.container}
        >
          <Link to="/">
            <Logo />
          </Link>
          <List categories={categories} />
          <Subscribe />
          <Footer />
        </div>
      </div>
    );
  }
}

export default MenuLayout;
