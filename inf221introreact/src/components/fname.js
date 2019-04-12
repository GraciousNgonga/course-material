import React from 'react';

export const Fname = (props) => {

    const { fname } = props; // destructuring objects
    console.log(props);
    
    return (
        <div>{ fname }</div>
    );

}