import '../Styles/App.css';
import React from 'react';



const TimeComponent = (props) => {
    let time = null;
    time = localStorage.getItem('time')

    // TODO: Check DB to match IP, if match retrieve last login time else display nothing
    // Passing through the IP as props, could rather be info about user i.e. their UUID
    return (
        <div>
            <h1>Last login= {time}</h1>
            <h1>Your IP= {props.ip}</h1>

        </div>
    )
}

export default TimeComponent;
