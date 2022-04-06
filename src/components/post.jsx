import React from "react";


const Post = (props) => {

  


    return (
      <div className="groupPost">
        <h4>{props.feed.name}</h4>
        <h8>{props.feed.post}</h8>  

      </div>
    );
  }
  
  
  
  export default Post;
  