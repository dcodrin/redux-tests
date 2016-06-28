import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions/index';

describe('actions', () => {
    describe('saveComment', () => {

        let action,
            payload;
        beforeEach(() => {
            payload = 'test bacon';
            action = saveComment(payload);
        });

        it('should have a type of SAVE_COMMENT', () => {
            expect(action.type).to.equal(SAVE_COMMENT);
        });
        it('should have a valid payload', () => {
            expect(action.payload).to.equal(payload);
        });
    });
});