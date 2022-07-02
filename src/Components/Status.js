function Status(props) {
    return (
        <div className={props.status}>
        <div className="user-info">
          <img src={props.profilePics} alt="Profile Picture" className="profile-pic" />
          <div className="user-text">
            <p><a href="https://generalassemb.ly/">{props.username}</a></p>
            <p><small>{props.date}</small></p>
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
    )}
  export default Status