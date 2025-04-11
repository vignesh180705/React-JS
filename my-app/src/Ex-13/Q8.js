import React from "react";
export default class TemperatureConverter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            celsius: 0,
            fahrenheit: 32
        };
    }

    handleCelsiusChange = (event) => {
        const celsius = event.target.value;
        this.setState({
            celsius: celsius,
            fahrenheit: (celsius * 9/5) + 32
        });
    }

    handleFahrenheitChange = (event) => {
        const fahrenheit = event.target.value;
        this.setState({
            fahrenheit: fahrenheit,
            celsius: (fahrenheit - 32) * 5/9
        });
    }

    render() {
        return (
            <div>
                <h1 align="center">Question-8</h1>
                <p align="center" style={{ fontSize: "20px" }}>
                    Celsius: 
                    <input type="number" value={this.state.celsius} onChange={this.handleCelsiusChange} /> 
                    <br/><br/>
                    Fahrenheit: 
                    <input type="number" value={this.state.fahrenheit} onChange={this.handleFahrenheitChange} />
                </p>
            </div>
        );
    }
}