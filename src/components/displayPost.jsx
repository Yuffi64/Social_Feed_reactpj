import React from "react";
import Post from "./Post";

const DisplayPost = (props) => {

  return(
    <div>
      <div className="header">

      </div>
    


      <div className="Display">
        {props.parentsMedia.map((feed) => {
          return(
            <div>
              <Post feed={feed}/>
              <ul>{feed.Name}</ul>
              <ul>{feed.Post}</ul>
            </div>
          )
        })}
      </div>
       
         
      


    </div>

  );

}
     
  
  export default DisplayPost;
