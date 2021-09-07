import React from 'react';
import './App.css';

function App() {
  return (
    <div className="timeline">
      <div className="status">
        <div className="user-info">
          <img src="https://ga-core.s3.amazonaws.com/cms/files/files/000/000/886/original/ga-logo-gear.png" alt="General Assembly Logo" className="profile-pic" />
          <div className="user-text">
            <p><a href="https://generalassemb.ly/">General Assembly</a></p>
            <p><small>April 3 at 10:25 AM</small></p>
          </div>
        </div>
        <p className="status-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ducimus beatae, eveniet magnam quam aperiam harum voluptatem, minus debitis repudiandae saepe. Enim, veritatis tempore possimus ex harum ad saepe inventore?
        </p>
        <hr/>
        <div className="reaction-bar">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

export default App;
