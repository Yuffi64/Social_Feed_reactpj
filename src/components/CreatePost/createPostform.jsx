// This component will add a post to the array
// incoming props are: 
// Update the array named:
import React, { useState } from "react";

const CreatePostForm = (props) => {

    // This may not actually need to display anything 
    //  but we are doing to test functionality for now.
    const [userName, setUserName] = useState('');
    const [userPost, setUserPost] = useState('');

    function handleSubmit(formEvent){
      formEvent.preventDefault();
      alert(`${userName}, your post has been created`);
    }

//?    return (
//?      <form>
//?        <label>Name</label>
//?        <input type = 'Name'/>
//?        <label>Post</label>
//?        <input Post = ''/>
//?        <label></label>
//?        <button type = 'submit'>Create</button> 
    return(
       <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type = 'text' onChange={(event) => setUserName(event.target.value)} value={userName}/>
          <label>Post</label>
          <input type = 'text' onChange={(event) => setUserPost(event.target.value)} value={userPost}/>
          <label></label>
          <button type = 'Submit'>Create</button> 
          
        </form>  

       );
      //?</form>
   //? );
  }
  
  
  
  export default CreatePostForm;