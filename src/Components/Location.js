import React, {Component} from 'react';

class Location extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="location">
                <p>{"Temperature: " + this.props.temperature + "°C" }</p>
                {/* <p>{this.props.temp_min}</p>
                <p>{this.props.temp_max}</p> */}
                <p>{"Humidity: " + this.props.humidity + "%"}</p>
                <p>{"Condition: " + this.props.condition}</p>
            </div>
        )
    }
}

export default Location;