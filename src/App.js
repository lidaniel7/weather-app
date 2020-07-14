import React, {Component} from 'react';
import './App.css';
import Location from './Components/Location.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: "Chicago",
      temperature: "",
      temp_min: "",
      temp_max: "",
      // humidity: "",
      // wind: "",
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(city) {
    const KEY = "8a5ef08ed5c0d2cb0672425f4f244986"
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${KEY}`

    fetch(link)
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        const location = response;
        this.setState({
          temperature: location.main.temp,
          temp_min: location.main.temp_min,
          temp_max: location.main.temp_max,
        })
      })
  }

  componentDidMount() {
    this.getWeather(this.state.city);
  }

  render() {
    return (
      <div className="App">
        {this.state.temperature}
        {this.state.temp_min}
        {this.state.temp_max}
      </div>
    );
  }
}

export default App;
