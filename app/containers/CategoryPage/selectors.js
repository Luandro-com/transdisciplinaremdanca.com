import { createSelector } from 'reselect';

/**
 * Direct selector to the categoryPage state domain
 */
const selectCategoryPageDomain = () => state => state.get('categoryPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CategoryPage
 */

const selectCategoryPage = () => createSelector(
  selectCategoryPageDomain(),
  (substate) => substate.toJS()
);

export default selectCategoryPage;
export {
  selectCategoryPageDomain,
};
