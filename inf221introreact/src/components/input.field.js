import React, { Component } from 'react';

class UserInput extends Component {

    constructor() {
        super();
        this.state = {
            myname: '',
        }
    }

    handleChange = (event) => {

        // event.preventDefault();
        const text = event.target.value;
        const fieldName = event.target.name;

        // then set state
        this.setState({ [fieldName]: text });

    }

    render() {

        console.log(this.state);

        return (
            <input 
                name="myname" 
                value={ this.state.myname }
                placeholder="Type something" 
                onChange={ (e) => this.handleChange(e) }
            />
        );

    }

}

export default UserInput;