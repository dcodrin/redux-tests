import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';


//Simulate a browser by attaching two variables to the global object
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

//Specifically indicate the simulated window object to jQuery
const $ = jQuery(global.window);

//Create function that will return a jQuery wrapped DOM element
//Props will be passed to component and state to the store
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props}/>
        </Provider>
    );
    //Convert react element in html
    const html = ReactDOM.findDOMNode(componentInstance);
    //Return jQuery wrapped DOM element
    return $(html);
}

//Attach a simulate function onto jQuery
$.fn.simulate = function(eventName, value) {
    //To gain access to component we simply use the 'this' keyword
    // example: $('div').simulate 'this' will apply to 'div';

    if(value) {
        //Set the value of a jQuery element
        this.val(value);
    }

    //Simulate an event on the first element returned by the jQuery selector 'this[0]'
    TestUtils.Simulate[eventName](this[0]);
};

//Set up chai-jquery
chaiJquery(chai, chai.util, $);



export {renderComponent, expect};
