import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        addTodo: React.PropTypes.func.isRequired
    }

    state = {value: ''};

    handleChange = (event) => this.setState({value: event.target.value});

    handleSubmit = (event) => {
        let __self= this;
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&lang=pt&appid=7a9a11514f4d9fd9db24795bb74b8711`
        ).then(res => res.json().then(
            json => __self.props.addWeather(json.name, json.sys.country, json.main.temp)
        ));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    City:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Search" />
            </form>
        );
    }
}