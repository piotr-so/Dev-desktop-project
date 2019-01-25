import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_WeatherWidget.scss";

class WeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherObj: [],
            canRender: false
        }
    }

    componentDidMount() {
        fetch('http://api.apixu.com/v1/current.json?q=auto:ip&key=2f4eeee7134443ea80503833192401').then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    console.log(response)
                }
            }
        ).then(weatherData => {
            this.setState({
                weatherObj: weatherData,
                canRender: true
            })
        })
    }

    render() {
        const { weatherObj, canRender } = this.state;
        if (canRender) {
            return (
                <div className="weather-widget-container">
                    <div className="weather-state">
                        <img src={weatherObj.current.condition.icon} className="weather-icon" alt={weatherObj.current.condition.text} />
                        <p className="weather-location">{weatherObj.location.name}</p>
                        <p>{weatherObj.current.condition.text}</p>
                    </div>
                    <div className="weather-params">
                        <p><FontAwesomeIcon icon="thermometer-half"/> {weatherObj.current.temp_c + "°"}</p>
                        <p><FontAwesomeIcon icon="wind"/> {weatherObj.current.wind_kph + " kph"}</p>
                        <p><FontAwesomeIcon icon="tint"/> {weatherObj.current.humidity + "%"}</p>
                        <p><FontAwesomeIcon icon="compress-arrows-alt"/> {weatherObj.current.pressure_mb + " hpa"}</p>
                    </div>
                </div>
            );
        }
        else {
            return null
        }
    }
}

export default WeatherWidget;
