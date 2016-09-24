import { createSelector } from 'reselect';

/**
 * Direct selector to the menu state domain
 */
const selectMenuDomain = () => state => state.get('menu');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Menu
 */

const selectMenu = () => createSelector(
  selectMenuDomain(),
  (substate) => substate.toJS()
);

export default selectMenu;
export {
  selectMenuDomain,
};
