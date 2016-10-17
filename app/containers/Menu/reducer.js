/*
 *
 * Menu reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_MENU,
} from './constants';

const initialState = fromJS({
  open: false,
});

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return state
      .set('open', !state.get('open'));
    default:
      return state;
  }
}

export default menuReducer;
