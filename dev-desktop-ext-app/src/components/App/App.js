import React, { Component } from 'react';
import './App.css';
import MainView from "../MainView/MainView";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faHome, faGlobeAmericas, faCode, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faClock } from "@fortawesome/free-regular-svg-icons";

library.add(faCircleNotch, faHome, faGlobeAmericas, faCode, faSpinner, faClock)

class App extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

export default App;
