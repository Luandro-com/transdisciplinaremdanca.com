import expect from 'expect';
import menuReducer from '../reducer';
import { fromJS } from 'immutable';

describe('menuReducer', () => {
  it('returns the initial state', () => {
    expect(menuReducer(undefined, {})).toEqual(fromJS({}));
  });
});
