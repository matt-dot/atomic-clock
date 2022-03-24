import '../Styles/App.css';
import React from 'react';

const TimeComponent = (props) => {
    const date = new Date();
    const currentTime = date.toLocaleDateString() + " " +  date.toLocaleTimeString()
    localStorage.setItem('aTime', currentTime);
    const bTime = localStorage.getItem('bTime')

    if(bTime) {
    return (
            <div className='time'>
                <h1>Current time= {currentTime} </h1>
                <h1>Last login= {bTime} </h1>
                <h1>Your IP= {props.ip}</h1>

            </div>
        )
    }
    else if (!bTime){
        return (
            <div className='time'>
                <h1>Current time= {currentTime} </h1>
                <h1>No last login </h1>
                <h1>Your IP= {props.ip}</h1>

            </div>
        )
    }


}








export default TimeComponent;
