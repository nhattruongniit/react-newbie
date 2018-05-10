import React, { Component } from 'react';

function BoilingVerdict(props){
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e){
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <div>
        <h2>Enter temperature in {scaleNames[scale]}:</h2>
        <input type="text" value={temperature} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default class Calculator extends Component{
  constructor(props){

    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};

  }

  handleChange(e){
    this.setState({temperlature: e.target.value})
  }

  handleCelsiusChange(temparture){
    this.setState({scale: 'c', temparture})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    )
  }

}
