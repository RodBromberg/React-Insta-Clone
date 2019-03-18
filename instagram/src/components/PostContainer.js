import React from 'react';
import CommentSection from './CommentSection'
import Post from './Post'

const PostContainer = props => {
    return (
    <div>
    {props.data.map(p => {
        return (
        <Post 
        post={p}
        />
     ) })}
    </div>
    )
  };
  
  export default PostContainer;
  
//   username: "fortnite",
//   thumbnailUrl: "https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg",
//   imageUrl: "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
//   likes: 4307,
//   timestamp: "J