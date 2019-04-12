import React from 'react';

import { Fname } from './fname';
import { Lname } from './lname';

const Person = (props) => {

    // const { fname, lname } = props;

    return (<div style={{ textAlign: `center` }}>
        <Lname { ...props } />
        <Fname { ...props } />
    </div>)

}

export default Person;