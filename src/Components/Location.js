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

export default Location;