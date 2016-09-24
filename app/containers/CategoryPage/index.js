/*
 *
 * CategoryPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectCategoryPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class CategoryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <Helmet
        title="CategoryPage"
        meta={[
          { name: 'description', content: 'Description of CategoryPage' },
        ]}
      />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectCategoryPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
