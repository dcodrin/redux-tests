import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('commentReducer', () => {
    it('should handle action with unknown type', () => {
        const action = {type: 'BACON', payload: 'test bacon'};
        const state = commentReducer([], action);
        expect(state).to.eql([]);
    });

    it('should handle action with type SAVE_COMMENT', () => {
        const action = {type: SAVE_COMMENT, payload: 'test bacon'};
        const state = commentReducer([], action);
        expect(state).to.eql([action.payload]);
    });
});
