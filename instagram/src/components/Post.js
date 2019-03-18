import React from 'react'
import CommentSection from './CommentSection'
import './PostContainer.css'
const Post = props => {

    return (
        <div>
        <div className='top-container'>
        <img class='icon-image' src={props.post.thumbnailUrl} />
        <h1>{props.post.username}</h1>
        </div>
        
        
        <img src={props.post.imageUrl}/>
        
        <div class='comment-container'>
        <div class='image-container'>
        <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png"></img>
        <img src="https://img.icons8.com/ios/50/000000/hearts.png" />
        </div>
        <p class='likes'>{props.post.likes} likes</p>
        <CommentSection comments={props.post.comments}/>
        
        </div>
        </div>
    )

}

export default Post