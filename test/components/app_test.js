import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';


//Use 'describe' to group together similar tests
describe('App', () => {

    let component;
    beforeEach(() => {
        component = renderComponent(App);
    });

    //Use 'it' to test a single attribute of a target
    it('should exist', () => {
        //Use 'expect' to make an assertion
        expect(component).to.exist;
    });

    it('should display a CommentBox component', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('should display a CommentDisplay component', () => {
       expect(component.find('.comment-display')).to.exist;
    });
});