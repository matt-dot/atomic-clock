import '../Styles/App.css';
import React from 'react';



const TimeComponent = (props) => {
    let lastLogin = null;
    lastLogin = localStorage.getItem('time')
    const date = new Date();
    const currentTime = date.toLocaleDateString() + " " +  date.toLocaleTimeString()


    // Passing through the IP as props, could rather be info about user i.e. their UUID
    return (
        <div>
            <h1>Current time= {currentTime} </h1>
            <h1>Last login= {lastLogin}</h1>
            <h1>Your IP= {props.ip}</h1>

        </div>
    )
}

export default TimeComponent;
