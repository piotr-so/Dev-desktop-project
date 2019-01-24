import React, { Component } from 'react';
import './App.css';
import MainView from "../MainView/MainView";
import DevUiOverview from "../DevUiOverview/DevUiOverview";
import WorldNews from "../WorldNews/WorldNews";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch, faHome, faGlobeAmericas, faCode, faSpinner, faThermometerHalf, faWind, faTint, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

library.add(faCircleNotch, faHome, faGlobeAmericas, faCode, faSpinner, faClock, faThermometerHalf, faWind, faTint, faCompressArrowsAlt)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/devUiOverview" component={DevUiOverview} />
          <Route path="/WorldNews" component={WorldNews} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
