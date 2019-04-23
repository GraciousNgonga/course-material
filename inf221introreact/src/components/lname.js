import React from 'react';

export const Lname = (props) => {

    console.log(props);
        
    return (
        <Fragment>
            <input placeholder="Enter lname..." name="lname" onChange={ (e) => props.handleChange(e) } />
            <div>{ props.lname }</div>
        </Fragment>
    )

}

// export class Lname extends Component {

//     state = {
//         lname: ''
//     }

//     handleChange = (e) => {

//         this.setState({ [e.target.name ]: e.target.value })

//     }

//     render() {

//         // const { lname } = this.props; // destructuring objects
//         console.log(this.state);
        
//         return <input name="lname" onChange={ (e) => this.props.handleChange(e) } />

//     }

// }