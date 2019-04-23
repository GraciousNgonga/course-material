import React, { Component } from 'react';

import { Fname } from './fname';
import { Lname } from './lname';

class Person extends Component {

    state = {
        fname: '',
        lname: ''
    }

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }

    render() {

        return (<div style={{ textAlign: `center` }}>
                <Lname { ...this.props } { ...this.state } handleChange={ this.handleChange } />
                <Fname { ...this.props } { ...this.state } handleChange={ this.handleChange } />
            </div>);

    }

}

export default Person;