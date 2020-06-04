import React from 'react';
import './index.css';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const keys = require('./key.js');
//console.log(keys.default.apiKeys.weather);

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            long: null,
            name: null,
            input: "",
        };

        this.getLocation = this.getLocation.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    setInput(event) {
        this.setState({
            input: event.target.value,
        })
    }

    getLocation(event) {
        event.preventDefault();
        
        let url = `https://us1.locationiq.com/v1/search.php?key=${keys.default.apiKeys.map}&q=${this.state.input}&format=json`;
        
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            //console.log(data[0]);
            this.setState({
                name: data[0].display_name,
                lat: data[0].lat,
                long: data[0].lon,
            });
            console.log(this.state.name);
            console.log(this.state.lat);
            console.log(this.state.long);
        })
        .catch((error) => console.log(error))
    }

    render() {

        return (
            <form className="searchBar" onSubmit={this.getLocation}>
                <label>
                    <input id="search" type="text" placeholder="Type Location Here..." value={this.state.input} onChange={this.setInput}/>
                </label>
                <button id="button">
                     <FontAwesomeIcon id="searchIcon" icon={faSearch} />
                </button>
                    
            </form>
        )
    }
}

export default Search;