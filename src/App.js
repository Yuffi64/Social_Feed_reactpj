import React, { useState } from 'react';
import DisplayPost from './components/DisplayPost';
import CreatePost from './components/CreatePost/CreatePostForm';


//Dont forget to follow I.C.E (Import, Component, Export)//

const App = (props) => {

  const [media, setMedia] = useState([{name:'Sam  ', post:' I am Hungry'},{name:'Alex Sherman', post:'It looks like its going to rain.'}])

  function addPost(medias){

    let tempMedia = [medias, ...media];
    setMedia(tempMedia);
  
  }


  return (
    <div>
      <div className="container-fluid">
        <div className='row'>
          <h1 className='text-primary' style={{margin:'1em'}}>Social
          <small className='text-muted'>Feed</small></h1>

        </div>
      </div>
      
      <CreatePost addNewPost={addPost}/>
      <DisplayPost parentsMedia={media}/>
     
      
    
    </div>
  );
}



export default App;

