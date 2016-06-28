import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentDisplay from './CommentDisplay';

export default class App extends Component {
  render() {
    return (
      <div>
          <CommentBox />
          <CommentDisplay />
      </div>
    );
  }
}
