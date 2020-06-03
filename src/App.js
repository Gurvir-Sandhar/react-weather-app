import React from 'react';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: null,
      long: null,
    };
  }

  componentDidMount() {

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log(position)
          this.setState ({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        function(error) {
          console.warn(`Error(${error.code})): ${error.message}`);
        },
        {timeout: 60000, enableHighAccuracy: true, maximumAge: 75000}
      )
    }
  }


  render() {

    return (
      <div className="App">
        <p> lat:{this.state.lat} </p>
        <p> long: {this.state.long}</p>

      </div>
    );
  }

}

export default App;
