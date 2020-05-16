import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ChooseTemplate from "./pages/ChooseTemplate";
import MemberBuild from "./pages/MemberBuild";

function App() {
  return (
    <Router>
      <div >
        <Route exact path="/template" component={ChooseTemplate} />
        <Route exact path="/member" component={MemberBuild} />


      </div>
    </Router>

  );
}

export default App;
