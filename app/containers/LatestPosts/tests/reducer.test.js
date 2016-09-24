import expect from 'expect';
import latestPostsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('latestPostsReducer', () => {
  it('returns the initial state', () => {
    expect(latestPostsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
