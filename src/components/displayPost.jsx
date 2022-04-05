// * This component will display a single post 
//!DISPLAY IS THE PARENT OF CREATE POST

import React from "react";

const DisplayPost = (props) => {

  return (
    <div>
      <header>
        {props.parentPost.map((entry)=> {
          return (
          <list>  
            <l1>{entry.name}</l1>  
            <l1>{entry.post}</l1>

          </list>
          );
        })} 
      </header>
     
     
     
      <main>
        <list>
          <h1>News Feed</h1>
        </list>
      </main>



      <footer>
      </footer>


    </div>



  );

}
     
  
  export default DisplayPost;
  