import React, {Component} from 'react';

class Location extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="location">
                <p>{this.props.temperature}</p>
                <p>{this.props.temp_min}</p>
                <p>{this.props.temp_max}</p>
                <p>{this.props.humidity}</p>
                <p>{this.props.condition}</p>
            </div>
        )
    }
}

function getLocation(city) {
    // const response = fetch('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=8a5ef08ed5c0d2cb0672425f4f244986', {mode: 'cors'})
    //         .then(function(response) {
    //             return response.json();
    //         })
    //         .then(function(response) {
    //             console.log(response)
    //         })
    return (
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=8a5ef08ed5c0d2cb0672425f4f244986', {mode: 'cors'})
            .then(function(response) {
                console.log(response.json())
                return response.json();
            })
            .then(function(response) {
                console.log(response)
            })
    )
}

export default Location;