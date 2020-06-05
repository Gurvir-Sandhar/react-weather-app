import React from 'react';
import Search from "./search.js"
import './index.css';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
	  return (
		  <div className="App">
			  <header className="header">
				  <FontAwesomeIcon id="sun" icon={faSun} />
				  <h1>Blue Sky Weather Forecast</h1>
			  </header>
			  <Search/>
		  </div>
	  );
  } 

}

export default App;
