import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component {

    constructor() {
        super();

        this.state = {comment: ''};
    }

    handleInputChange(e) {
        this.setState({
            comment: e.target.value
        });
    }

    handleCommentSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props,
            {comment} = this.state;
        dispatch(actions.saveComment(comment));
        this.setState({
            comment: ''
        });
    }

    render() {
        return (
            <div className="comment-box">
                <form onSubmit={this.handleCommentSubmit.bind(this)}>
                    <div>
                        <textarea value={this.state.comment} onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div>
                        <button action="submit">Submit Comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(CommentBox);
