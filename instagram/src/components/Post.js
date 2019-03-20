import React from 'react'
import CommentSection from './CommentSection'
import './PostContainer.css'
import LikeSection from './LikeSection'

class Post extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            count: props.post.likes,
            clicked: false
        }
    }

    
//    increment = () => {
//     if(this.state.count === this.props.post.likes) {
//       this.setState({
//        count: this.state.count + 1
//       })
//     } else if(this.state.count === 1){
//       this.setState({
//         count: this.state.count - 1
//       })
//     }

//     } s

// incrementLike = () => {
//     if(this.count) {
//         this.setState( {
//             return {
//                 count: this.state.count + 1
//             }
//         })
//     }
// }

// incrementLike = (prevState) => {
//     if(this.state.count === this.props.post.likes) {
//         let likesss = this.prevState.count + 1;
//         this.setState({ count: likesss});
//       } else {
//           let likesss = this.prevState.count - 1;
//           this.setState({count:  likesss })
//       }
//     }


incrementLike = () => {
    if(this.state.count === this.props.post.likes) {
    let likesss = this.state.count + 1;
    this.setState({ count: likesss });
  } else {
      let likesss = this.state.count - 1;
      this.setState({count:  likesss })
  }
}




// incrementLike  = e => {
//     this.setState(prevState => { return { 
//         count: (this.state.liked ? prevState.count-1 : prevState.count+1), 
//         liked: !this.state.liked
//     }
// })
// }


    render () {
        return(
            <div>
                     <div className='top-container'>
                     <img class='icon-image' src={this.props.post.thumbnailUrl} />
                     <h1>{this.props.post.username}</h1>
                     </div>
                    
                    
                     <img src={this.props.post.imageUrl}/>
                    
                    <div class='comment-container'>
                    <div class='image-container'>
                   <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png"></img>
                    <img onClick={this.incrementLike}src="https://img.icons8.com/ios/50/000000/hearts.png" />
                   </div>
                   <LikeSection
                        likes={this.state.count}
                        />
                    {/* <p class='likes'>{this.props.post.likes} likes</p>
                 */}
                
                    <CommentSection comments={this.props.post.comments}/>
                    
                  </div>
                </div>
        )
    }
   
}

// const increment = () => {

// }

// const Post = props => {

//     return (
//         <div>
//         <div className='top-container'>
//         <img class='icon-image' src={props.post.thumbnailUrl} />
//         <h1>{props.post.username}</h1>
//         </div>
        
        
//         <img src={props.post.imageUrl}/>
        
//         <div class='comment-container'>
//         <div class='image-container'>
//         <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png"></img>
//         <img onClick={} src="https://img.icons8.com/ios/50/000000/hearts.png" />
//         </div>
//         <p class='likes'>{props.post.likes} likes</p>
//         <CommentSection comments={props.post.comments}/>
        
//         </div>
//         </div>
//     )

// }

export default Post