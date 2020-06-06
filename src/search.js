import React from 'react';
import Weather from './weather.js';
import './index.css';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//const keys = require('./key.js');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            lat: null,
            long: null,
            name: null,
            input: "",
            isLoaded: false,
        };

        this.getLocation = this.getLocation.bind(this);
        this.setInput = this.setInput.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    setInput(event) {
        this.setState({
            input: event.target.value,
        })
    }

    getLocation(event) {
        event.preventDefault();
        
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.mapkey}&q=${this.state.input}&format=json`;
        
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            //console.log(data[0]);
            this.setState({
                name: data[0].display_name,
                lat: data[0].lat,
                long: data[0].lon,
            });
            //console.log(this.state.name)
            this.getWeather();
        })
        .catch((error) => console.log(error))
    }

    getWeather() {
        var parent = document.getElementsByClassName("weather");
        parent.innerHTML = "";

        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&appid=${process.env.weatherkey}&units=imperial`;

        fetch(url)
        .then(response => response.json())
        .then((data) => {
            //console.log(data);
            this.setState({
                weather: data,
                isLoaded: true,
            });
        })
        .catch((error) => console.log(error));
    }

    render() {
        const { weather, isLoaded } = this.state;

        if(!isLoaded) {
             var element =  <div></div>;
        } else {
            var element = <Weather key={weather} data={weather} name={this.state.name}/>;
        }
        return (
            <div className="searchWrapper">
                <form className="searchBar" onSubmit={this.getLocation}>
                    <label>
                        <input id="search" type="text" placeholder="Type Location Here..." value={this.state.input} onChange={this.setInput}/>
                    </label>
                    <button id="button">
                        <FontAwesomeIcon id="searchIcon" icon={faSearch} />
                    </button>
                </form>
                <div className="weather">
                    {element}
                </div>
            </div>
        )
    }
}

export default Search;