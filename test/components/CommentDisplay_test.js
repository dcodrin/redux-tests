import {renderComponent, expect} from '../test_helper';
import CommentDisplay from '../../src/components/CommentDisplay';

describe('CommentDisplay', () => {
    let component;
    const comments = ['test bacon', 'test burger'];
    beforeEach(() => {
        component = renderComponent(CommentDisplay, null, {comments});
    });

    it('should exist', () => {
        expect(component).to.exist;
    });

    it('should display an li for each comment', () => {
        expect(component.find('li').length).to.equal(comments.length);
    });

    it('should display all comments that are provided', () => {
        expect(component).to.contain('test burger');
        expect(component).to.contain('test bacon');
    });
});
