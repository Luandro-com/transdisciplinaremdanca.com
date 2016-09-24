import expect from 'expect';
import categoryPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('categoryPageReducer', () => {
  it('returns the initial state', () => {
    expect(categoryPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
