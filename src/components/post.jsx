import React from "react";




const Post = (props) => {

    return (



      <div className="groupPost">

        <div>
        <h4>{props.feed.name}</h4>
        <h8>{props.feed.post}</h8> 
        <h4>{props.feed.Name}</h4>
        <h8>{props.feed.Post}</h8>
        </div>
      
      </div>
    );
  }
  
  
  
  export default Post;
  

  //  