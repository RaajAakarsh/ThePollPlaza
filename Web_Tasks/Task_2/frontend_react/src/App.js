import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import PollDetails from "./PollDetails";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="component">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/create">
              <Create></Create>
            </Route>

            <Route path="/polls/:id">
              <PollDetails></PollDetails>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/profile">
              <Profile></Profile>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
