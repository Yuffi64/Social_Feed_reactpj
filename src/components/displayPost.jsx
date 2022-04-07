import React from "react";
import Post from "./Post";

const DisplayPost = (props) => {

  return(
    <div>
      <div className="container" key={props.parentsMedia.length}>

      </div>
    


      <div className="Display">
        {props.parentsMedia.map((feed) => {
          return(
            <div>
              <Post feed={feed}/>
              
            </div>
          )
        })}
      </div>
     
         
    

    </div>

  );

}
     
  
  export default DisplayPost;
