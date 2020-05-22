import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooseTemplate from "./pages/ChooseTemplate";
import MemberBuild from "./pages/MemberBuild";
import Home from "./pages/Homepage.js";
import LogIn from "./pages/LogIn"
import Headerside from './components/Headerside';
import Dashboard from './components/Dashboard';
import M from  'materialize-css/dist/js/materialize.min.js';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { userId: null };
  
  }

  componentDidMount = () => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
render() {
  
  return (
    <div>
    {/* <Header /> */}
    <Router>
      <div >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn}   />
        <Route exact path="/template" component={ChooseTemplate} />
        <Route exact path="/member" component={MemberBuild}   />
        <Route exact path="/mydashboard" render={ Dashboard }  />

      </div>
    </Router>
    </div>

  );
}
}

export default App;
