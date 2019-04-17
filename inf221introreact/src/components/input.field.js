import React, { Component, Fragment } from 'react';

class UserInput extends Component {

    constructor() {
        super();
        this.state = {
            myname: '',
        }
    }

    handleChange = (event) => {
        console.log(event)
        // event.preventDefault();
        const text = event.target.value;
        const fieldName = event.target.name;

        // then set state
        this.setState({ [fieldName]: text });

    }

    handleClick = (e) => {
        e.preventDefault();

        console.log(this.state)
        
    }

    isDirty = (text) => {

        return text !== null && text !== undefined && text.length !== 0 ? true : false;

    }

    render() {

        return (
            <Fragment>
                <input 
                    name="myname" 
                    value={ this.state.myname }
                    placeholder="Type something" 
                    onChange={ (e) => this.handleChange(e) }
                />
                {
                    this.state.myname && (
                        <input 
                            type="button" 
                            value="Enter" 
                            onClick={ (e) => this.handleClick(e) } 
                        />
                    )
                }

                {
                    this.state.myname ? (
                        <input 
                            type="button" 
                            value="Cancel" 
                            onClick={ (e) => this.handleClick(e) } 
                        />
                    ) : (
                        <input 
                            type="button" 
                            value="Submit" 
                            onClick={ (e) => this.handleClick(e) } 
                        />
                    )
                }
            </Fragment>
        );

    }

}

export default UserInput;