import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo.jsx';
import WeatherFinder from './WeatherFinder.jsx';
import * as WeatherActions from '../actions/WeatherActions.js'

const IndexPage = ({weather, actions}) => (
    <main>
        <h1>Weather in my city</h1>
        <WeatherFinder addWeather={actions.addWeather}/>
        {weather.temp ? <WeatherInfo weather={weather}/> : null}
    </main>
);

IndexPage.propTypes = {
    weather: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    weather: state.weather
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(WeatherActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);