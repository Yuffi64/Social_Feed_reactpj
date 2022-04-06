// This component will add a post to the array
// incoming props are: 
// Update the array named:
import React, { useState } from "react";

const CreatePostForm = (props) => {

    // This may not actually need to display anything 
    //  but we are doing to test functionality for now.
    const [userName, setUserName] = useState('');
    const [userPost, setUserPost] = useState('');
  

    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = { 
        Name: userName, 
        Post: userPost,
        
      };

      console.log(newPost);
      props.addNewPost(newPost);
      
    }


    return(
    
       
       
       <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type = 'text' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <label>Post</label>
          <input type = 'text' value={userPost} onChange={(e) => setUserPost(e.target.value)} />
          <label></label>
          <button type = 'Submit'>Create</button> 
          
        </form>  
    
    );
    
   


  }
    
  export default CreatePostForm;