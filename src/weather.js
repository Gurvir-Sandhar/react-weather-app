//var Skycons = require('react-skycons');
import React from 'react';
import Skycons from 'react-skycons';
import moment from 'moment-timezone';
import './index.css';

class Weather extends React.Component {
    render() {
        const {data} = this.props;

        console.log(data);
        var dateTime = moment().tz(data.timezone).format();
        var date = dateTime.slice(5,10);
        var time = dateTime.slice(14,19);
        console.log(time)
        var description = data.current.weather[0].main;
        var icon = '';
        var day = false;
        var num = parseInt(date.slice(0,2));
        if(num > 5 && num < 20){
            day = true;
        }

        if(description === "Clouds"){
            icon = "CLOUDY";
        } else if(description === "Snow"){
            icon = "SNOW";
        } else if(description === "Rain" || description === "Drizzle"){
            icon = "RAIN";
        } else if(description === "Fog"){
            icon = "FOG";
        } else if(description === "Tornado"){
            icon = "WIND";
        } else if(description === "Clear" && day === true){
            icon = "CLEAR_DAY";
        } else if(description === "Clear" && !day){
            icon = "CLEAR_NIGHT";
        } else{
            icon = "CLOUDY";
        }


        return (
            <div className="weatherWrapper" key={this.props.data.weather}>
                <div className="nameDate">
                    <h2>{this.props.name}</h2>
                    <h3>{date}</h3>
                </div>
                <div className="tempIcon">
                    <h2 id="temp">{Math.round(data.current.temp)}&#176;</h2>
                    <h4>Feels like {Math.round(data.current.feels_like)}&#176;</h4>
                    <Skycons
                        id="skycons"
                        color='white'
                        icon={icon}
                    />
                    <h3 id="description">{data.current.weather[0].description}</h3>
                </div>
                    
            </div>
        )
    }
}

export default Weather;