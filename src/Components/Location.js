import React, {Component} from 'react';

class Location extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let link = "http://openweathermap.org/img/wn/" + this.props.icon + "@4x.png"
        return (
            <div className="location">
                <h3>{this.props.city}</h3>
                <img src={link} />
                <p>{"Condition: " + this.props.condition}</p>
                <p>{"Temperature: " + this.props.temperature + "°F" }</p>
                {/* <p>{this.props.temp_min}</p>
                <p>{this.props.temp_max}</p> */}
                <p>{"Humidity: " + this.props.humidity + "%"}</p>
            </div>
        )
    }
}

export default Location;