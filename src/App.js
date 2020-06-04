import React from 'react';
import './index.css';
import { faSun, faSearch } from '@fortawesome/free-solid-svg-icons';

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
			  <form className="searchBar">
				  <input id="search" type="text" placeholder="Type Location Here..." />
				  <button id="button" type="button">
					  <FontAwesomeIcon id="searchIcon" icon={faSearch} />
				  </button>
				  <div className="components">

				  </div>
			  </form>
		  </div>
	  );
  } 

}

export default App;
