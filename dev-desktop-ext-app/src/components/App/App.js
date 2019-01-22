import React, { Component } from 'react';
import './App.css';
import MainView from "../MainView/MainView";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch} from '@fortawesome/free-solid-svg-icons';

library.add(faCircleNotch)

class App extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

export default App;
