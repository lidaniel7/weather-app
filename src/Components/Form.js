import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {inputCity, handleChange} = this.props;

        return (
            <form onSubmit={inputCity}>
                <input type="text" placeHolder="Enter a City" onChange={handleChange}/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;