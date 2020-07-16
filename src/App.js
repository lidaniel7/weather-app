import React, {Component} from 'react';
import './App.css';
import Location from './Components/Location.js';
import Form from './Components/Form.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: "Chicago",
      temperature: "",
      temp_min: "",
      temp_max: "",
      humidity: "",
      condition: "",
      newCity: "",
    }
    this.getWeather = this.getWeather.bind(this);
    this.inputCity = this.inputCity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getWeather(city) {
    const KEY = "8a5ef08ed5c0d2cb0672425f4f244986"
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${KEY}`
    fetch(link)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        const location = response;
        this.setState({
          temperature: location.main.temp,
          temp_min: location.main.temp_min,
          temp_max: location.main.temp_max,
          humidity: location.main.humidity,
          condition: location.weather[0].description,
        })
      })
      .catch((error) => {
        alert("You have entered an invalid city")
      })
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      newCity: event.target.value
    })
    // console.log(this.state.newCity)
  }

  inputCity(event) {
    event.preventDefault();
    this.setState({
      city: this.state.newCity,
    })
    this.getWeather(this.state.newCity);
    event.target.reset();
  }

  componentDidMount() {
    this.getWeather(this.state.city);
  }

  render() {


    return (
      <div className="App">
        <Location 
          temperature={this.state.temperature}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          humidity={this.state.humidity}
          condition={this.state.condition}
        />
        <Form inputCity={this.inputCity} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
