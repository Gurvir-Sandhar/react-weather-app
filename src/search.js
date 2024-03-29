//search bar component for searching different locations
import React from 'react';
import Weather from './weather.js';
import './index.css';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form } from 'react-bootstrap';


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
        
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP}&q=${this.state.input}&format=json`;
        
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                name: data[0].display_name,
                lat: data[0].lat,
                long: data[0].lon,
            });
            this.getWeather();
        })
        .catch((error) => console.log(error))
    }

    getWeather() {
        var parent = document.getElementsByClassName("weather");
        parent.innerHTML = "";

        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&appid=${process.env.REACT_APP_WEATHER}&units=imperial`;

        fetch(url)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                weather: data,
                isLoaded: true,
            });
        })
        .catch((error) => console.log(error));
    }

    render() {
        const { weather, isLoaded } = this.state;

        var element;
        if(!isLoaded) {
             element = <div></div>;
        } else {
            element = <Weather data={weather} name={this.state.name}/>;
        }
        return (
            <div className="searchWrapper">
                <Form className="searchBar" onSubmit={this.getLocation}>
                    <Form.Group>
                        <Form.Control id="search" type="text" placeholder="Search Location..." onChange={this.setInput}></Form.Control>
                    </Form.Group>
                    <Button id="button" variant="primary" type="submit">
                         <FontAwesomeIcon id="searchIcon" icon={faSearch} />
                    </Button>
                </Form>

                <div className="weather">
                    {element}
                </div>
            </div>
        )
    }
}

export default Search;