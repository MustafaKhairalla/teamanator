import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooseTemplate from "./pages/ChooseTemplate";
import MemberBuild from "./pages/MemberBuild";
import Home from "./pages/Homepage.js";
import LogIn from "./pages/LogIn"
import Headerside from './components/Headerside';
import Dashboard from './components/Dashboard';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
// import Header from './components/Header';
import Register from './components/Register';
// import Footer from './components/Footer';

class App extends Component {

componentDidMount = () => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
render() {
  return (
    <div>
    {/* <Header /> */}
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
