import React from 'react';
import './index.css';

const keys = require('./key.js');

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
        };
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="weatherWrapper" key={this.state.weather}>
                <div className="currentWeather">

                </div>
            </div>
        )
    }
}

export default Weather;