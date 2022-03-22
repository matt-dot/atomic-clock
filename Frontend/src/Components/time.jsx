import '../Styles/App.css';
import React from 'react';



const TimeComponent = (props) => {

    // TODO: Check DB to match IP, if match retrieve last login time else display nothing
    // Passing through the IP as props, could rather be info about user i.e. their UUID
    return (
        <div>
            <h1>Last login= DD:MM:YY HH:SS</h1>
            <h1>Your IP= {props.ip}</h1>

        </div>
    )
}

export default TimeComponent;
