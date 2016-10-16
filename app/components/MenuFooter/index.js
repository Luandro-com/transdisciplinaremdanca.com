/**
*
* MenuFooter
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import UfvLogo from '../LayoutWrapper/ufv.png';

import styles from './styles.css';

function MenuFooter() {
  return (
    <footer className={styles.wrapper}>
      <p><FormattedMessage {...messages.header} /></p>
      <div className={styles.imgs}>
        <img src={UfvLogo} alt="Universidade Federal de Viçosa" />
        <img src={UfvLogo} alt="Universidade Federal de Viçosa" />
        <img src={UfvLogo} alt="Universidade Federal de Viçosa" />
      </div>
      <a href="http://luandro.com"><h4>por Luandro</h4></a>
    </footer>
  );
}

MenuFooter.propTypes = {
  data: React.PropTypes.string,
};

export default MenuFooter;
