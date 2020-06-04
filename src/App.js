import React from 'react';
import './index.css';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const keys = require('./key.js');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: null,
      long: null,
    };
  }

  componentDidMount() {
    //console.log(keys.default.apiKeys.weather);
  }


  render() {

    return (
      <div className="App">
        <header className="header">
          <FontAwesomeIcon id="sun" icon={faSun} />
          <h1>Blue Sky Weather Forecast</h1>
        </header>
        <div className="components"></div>

      </div>
    );
  }

}

export default App;
