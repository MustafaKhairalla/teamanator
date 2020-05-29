import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooseTemplate from "./pages/ChooseTemplate";
import MemberBuild from "./pages/MemberBuild";
import Home from "./pages/Homepage.js";
import LogIn from "./pages/LogIn"
import Dashboard from './components/Dashboard';
import Register from './components/Register';
// import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { userId: null };

  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            

            <Route exact path="/member"
              render={(props) => <MemberBuild {...props} userId={this.state.userId} />}
            />
            <Route
              exact path="/register"
              render={(props) => <Register {...props} userId={this.state.userId} />}
            />

            <Route
              exact path="/login"
              render={(props) => <LogIn {...props} userId={this.state.userId} setUser={(data) => this.setState({ userId: data })} />}
            />

            <Route exact path="/template"
              render={(props) => <ChooseTemplate {...props} userId={this.state.userId} />}
            />

            <Route exact path="/mydashboard"
              render={(props) => <Dashboard {...props} userId={this.state.userId} />}
            />

          </div>
        </Router>
      </div>
    );
  }
}
export default App;












