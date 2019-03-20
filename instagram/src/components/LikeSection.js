import React from 'react'


// class Likes extends React.Component{
//     constructor(props) {
//         super(props)

//         this.State = {
//             like: props.like.likes,
//         }

//     }

//     render() {
//         return(
//             <div>
//                 <p>{this.state.like}</p>
//             </div>
//         )
//     }

// }



const LikeSection = props => {
    return [
      <div
        className="like-section"
        key="likes-icons-container"
        onClick={props.incrementLike}
      >
        <div className="like-section-wrapper">
          <i className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>,
      <div className="like-section" key="likes-container">
        <div className="like-section-wrapper">{props.likes}</div>
      </div>
    ];
  };


// const Likes = (props) => {
//     return (
//         <div
//         className="like-section"
//         key="likes-icons-container"
//         onClick={props.incrementLike}
//       >
//         <div className="like-section-wrapper">
//           <i className="far fa-heart" />
//         </div>
//         <div className="like-section-wrapper">
//           <i className="far fa-comment" />
//         </div>
//       </div>,
//       <div className="like-section" key="likes-container">
//         <div className="like-section-wrapper">{props.likes}</div>
//       </div>
//     )
// }

export default LikeSection