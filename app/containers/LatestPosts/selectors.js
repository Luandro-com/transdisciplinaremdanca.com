import { createSelector } from 'reselect';

/**
 * Direct selector to the latestPosts state domain
 */
const selectLatestPostsDomain = () => state => state.get('latestPosts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LatestPosts
 */

const selectLatestPosts = () => createSelector(
  selectLatestPostsDomain(),
  (substate) => substate.toJS()
);

export default selectLatestPosts;
export {
  selectLatestPostsDomain,
};
