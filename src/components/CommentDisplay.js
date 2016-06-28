import React from 'react';
import {connect} from 'react-redux';

const CommentDisplay = (props) => {
    return (
        <div className="comment-display">
            <ul>
                {props.comments.map(comment => <li key={comment}>{comment}</li>)}
            </ul>
        </div>
    );
};

export default connect((state) => {
    return {comments: state.comments};
})(CommentDisplay);