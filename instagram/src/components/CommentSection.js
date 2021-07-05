import React from 'react'
import Comment from './Comment'
import dummyData from '../dummy-data';
import AddComment from './AddComment'
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        comment: '',
        likes: props.likes
      };
    }

   inputChangeHandler = e => {
     this.setState({ 
       comment: e.target.value})
   }

   formSubmitHandler = (event) => {
     event.preventDefault()
     let newComment = {
       username: 'rod',
       text: this.state.comment,
     }

     let comments = this.state.comments.slice()
     comments.push(newComment)

     this.setState({
       comments,
       comment: ''
     })
   }



    render() {
      return (
       
        <div class='comment-section'>
         <p>{this.state.likes}</p>
        <img src="" alt=""/>
         {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
         <span>2 hours ago</span>
         <AddComment
          comment={this.state.comment}
          change={this.inputChangeHandler}
          addComment={this.formSubmitHandler}
         
          
         />
        </div>
      );
    }
  }
  

export default CommentSection


















      // commentHandler = e => {
      //   this.setState({ comment: e.target.value })
      // }

      // handleCommentSubmit = e => {
      //   e.preventDefault();
      //   const newComment = { text: this.state.comment, username: 'rod'}
      //   const comments = this.state.comments.slice();
      //   comments.push(newComment);
      //   this.setState({ comments, comment: ''})
      // }