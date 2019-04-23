import React, { Fragment } from 'react';

export const Fname = (props) => {

    // const { fname } = this.props; // destructuring objects
    console.log(props);
        
    return (
        <Fragment>
            <input placeholder="Enter fname..." name="fname" onChange={ (e) => props.handleChange(e) } />
            <div>{ props.fname } { props.lname }</div>
        </Fragment>
    )

}

// export class Fname extends Component {

//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         fname: ''
//     //     }
//     // }
//     state = {
//         fname: ''
//     }

//     handleChange = (e) => {

//         this.setState({ fname: e.target.value })

//     }

//     render() {

//         // const { fname } = this.props; // destructuring objects
//         console.log(this.state);
        
//         return (
//             <Fragment>
//                 <input name="fname" onChange={ (e) => this.handleChange(e) } />
//                 <div>{ this.state.fname }</div>
//             </Fragment>
//         )

//     }

// }