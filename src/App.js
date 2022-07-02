import React from 'react';
import './App.css';
import Status from './Components/Status'; 
function App() {
  return (
    <div className="timeline">
      <Status
      status="Happy"
      profilePics="https://i.imgur.com/aeruXAl.jpg"
      username="Jay"
      date="6/10/22"
      />
      <Status
      status="Busy"
      profilePics="https://i.imgur.com/1JUtBPW.jpg"
      username="Matthew"
      date="6/17/22"
      />
      <Status
      status="Active"
      profilePics="https://i.imgur.com/VFCObWM.jpg"
      username="Denton"
      date="6/22/22"
      />  
    </div>
  );
}

export default App;
