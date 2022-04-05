import React, { useState } from 'react';
import DisplayPost from './components/displayPost';
import CreatePost from './components/CreatePost/createPostform';
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


//*This MAIN APP will contain
//^SocialFeed background by CSS
//& The (Create Post) having the UserInput and the create button
//~ The display all created post with -name of user -post made 
//~ and -"like and display button(toggle) -date of created post"
//TODO have post submit to the new feeds.
 