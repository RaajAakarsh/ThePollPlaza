import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="text">
          <h1>The Poll Plaza</h1>
        </div>
      <div className="links">
        <Link id="home-icon" to="/">
          <img src="/Images/home.png" alt="Go to Home" />
        </Link>
        <Link id="create-poll" to="/create">
          <img src="/Images/CreatePoll.png" alt="Create Poll" />
        </Link>
        <Link id="profile" to="/profile">
          <img src="/Images/Profile.png" alt="Profile" />
        </Link>
        <Link id="login" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
