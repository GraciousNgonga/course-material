import React, { Component, Fragment } from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            firstname: null,
            lastname: null
        }
    }

    componentDidMount() {

        this.setState({ firstname: 'Joseph' })

    }

    render() {

        // this.setState({ firstname: 'Joseph' });
        // Object.assign(this.state, { firstname: "Josephy" });

        return (
            <Fragment>
                { this.state.firstname }
            </Fragment>
        )
    }

}

export default Form;