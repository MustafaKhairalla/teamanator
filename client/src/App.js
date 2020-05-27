import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooseTemplate from "./pages/ChooseTemplate";
import MemberBuild from "./pages/MemberBuild";
import Home from "./pages/Homepage.js";
import LogIn from "./pages/LogIn"
import Dashboard from './components/Dashboard';
<<<<<<< HEAD
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
// import Header from './components/Header';
=======
import Header from './components/Header';
>>>>>>> ec12e6a5756008117602b3b891d661a1277ec803
import Register from './components/Register';
// import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { userId: null };
  
  }

<<<<<<< HEAD
componentDidMount = () => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
=======
>>>>>>> ec12e6a5756008117602b3b891d661a1277ec803
render() {
  
  return (
    <div>
    <Router>
      <div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/template" component={ ChooseTemplate } />
        <Route exact path="/member" component={ MemberBuild } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/template" component={ChooseTemplate} />
        <Route exact path="/mydashboard" render={ Dashboard } />
      </div>
    </Router>
    </div>

  );
}
}

export default App;
