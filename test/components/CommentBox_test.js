import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';
import $ from 'jquery';

describe('CommentBox', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('should have the class "comment-box"', () => {
        expect(component).to.have.class('comment-box');
    });
    it('should include a text are', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('should include a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('text input', () => {

        beforeEach(() => {
           component.find('textarea').simulate('change', 'testing');
        });

        it('should display text that is entered', () => {
            expect(component.find('textarea')).to.have.value('testing');
        });

        it('should clear input on submit', () => {
            component.find('form').simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});