import React, { Component } from 'react';

export class Lname extends Component {

    state = {
        lname: ''
    }

    handleChange = (e) => {

        this.setState({ [e.target.name ]: e.target.value })

    }

    render() {

        // const { lname } = this.props; // destructuring objects
        console.log(this.state);
        
        return <input name="lname" onChange={ (e) => this.props.handleChange(e) } />

    }

}