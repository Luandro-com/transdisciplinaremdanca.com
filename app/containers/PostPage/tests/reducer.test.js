import expect from 'expect';
import postPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('postPageReducer', () => {
  it('returns the initial state', () => {
    expect(postPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
