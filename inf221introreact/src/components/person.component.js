import React from 'react';

const Person = ({ fname, lname }) => {

    return <div style={{ textAlign: `center` }}>{ fname + ' ' + lname }</div>

}

export default Person;