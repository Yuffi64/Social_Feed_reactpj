import React, { useState } from 'react';
import DisplayPost from './components/displayPost';
import CreatePost from './components/createPost';
import Posts from './components/post';


//Dont forget to follow I.C.E (Import, Component, Export)//

function App() {

  const [media, setMedia] = useState([{}])
  return (
    <div>
      <h1>This is the Main App</h1>

      <DisplayPost />
      <CreatePost />
      <Posts/>
    </div>
  );
}



export default App;
