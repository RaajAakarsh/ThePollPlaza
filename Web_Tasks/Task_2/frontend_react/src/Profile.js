import "./Styles/profile.css";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const handleDelete = () => {
    history.push("/");
  };

  const handleLogout = () => {
    history.push("/login");
  };

  return (
    <div className="main">
      <div className="user">
        <div className="photo">
          <img src="/Images/sample-profile-pic.avif" alt="" />
        </div>
        <div className="details">
          <h1>Andrew Wilson</h1>
          <p>Username:</p>
          <h2>AndWilson723</h2>
          <p>Contact:</p>
          <h3>andrew@gmail.com</h3>
        </div>
      </div>
      
      <h1>Polls created by you:</h1>
      <div className="allPolls">
        <div className="poll-preview" style={{ boxShadow: "none" }}>
          <div className="poll">
            <h2>Favorite Color</h2>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div className="poll-preview" style={{ boxShadow: "none" }}>
          <div className="poll">
            <h2>Societal Issues</h2>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div className="poll-preview" style={{ boxShadow: "none" }}>
          <div className="poll">
            <h2>Favorite Movie</h2>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div className="poll-preview" style={{ boxShadow: "none" }}>
          <div className="poll">
            <h2>Favorite Animal</h2>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className="other">
        <button id="createButton" type="submit" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
