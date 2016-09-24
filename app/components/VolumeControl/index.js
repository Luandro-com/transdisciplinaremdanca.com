/**
*
* VolumeControl
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function VolumeControl() {
  return (
    <div className={styles.volumeControl}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

VolumeControl.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default VolumeControl;
