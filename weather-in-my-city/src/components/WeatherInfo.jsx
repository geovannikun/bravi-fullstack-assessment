import React from 'react';

export default class WeatherInfo extends React.Component {
    static propTypes = {
        weather: React.PropTypes.object.isRequired
    }
    render() {
        const { weather } = this.props
        return (
        <div className="weather">
            <p><strong>{weather.city}</strong>, {weather.country}</p>
            <span>{weather.temp}º</span>
        </div>
        );
    }
}