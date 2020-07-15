import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {inputCity, handleChange} = this.props;

        return (
            <form onSubmit={inputCity}>
                <input placeHolder="Enter a City" onChange={handleChange}/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;