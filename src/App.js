import React, { useState } from 'react';
import DisplayPost from './components/DisplayPost';
import CreatePost from './components/CreatePost/CreatePostForm';



//Dont forget to follow I.C.E (Import, Component, Export)//

const App = (props)=> {

  const [media, setMedia] = useState([{name:'Sam  ', post:' I am Hungry'},{name:'Alex Sherman', post:'It looks like its going to rain.'}])

  function addPost(medias){

    let tempMedia = [medias, ...media];
    setMedia(tempMedia);
  
  }


  return (
    <div>
      <div className="header">
        <h1>SocialFrame</h1>
      </div>
      
      <CreatePost addNewPost={addPost}/>
      <DisplayPost parentsMedia={media}/>
     
      
    
    </div>
  );
}



export default App;

