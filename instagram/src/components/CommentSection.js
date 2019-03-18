import React from 'react'
import Comment from './Comment'
import dummyData from '../dummy-data';
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments
      };
    }
    render() {
      return (
        <div class='comment-section'>
         {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
         <span>2 hours ago</span>
        </div>
      );
    }
  }
  

export default CommentSection