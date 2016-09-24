import { createSelector } from 'reselect';

/**
 * Direct selector to the postPage state domain
 */
const selectPostPageDomain = () => state => state.get('postPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostPage
 */

const selectPostPage = () => createSelector(
  selectPostPageDomain(),
  (substate) => substate.toJS()
);

export default selectPostPage;
export {
  selectPostPageDomain,
};
