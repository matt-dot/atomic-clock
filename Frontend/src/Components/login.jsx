import '../Styles/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimeComponent from './time'
import NavComponent from './nav';


function LoginComponent(props) {
    const [ip, setIP] = useState('');
    const [login, setLogin] = useState(false);
    // Temp until hooked up to backend to get the time
    let date = new Date()

const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
}

useEffect(() => {
    getData();
    localStorage.setItem('time', date.toLocaleDateString() + " " +  date.toLocaleTimeString())
}, [])

const onClick = () => {
    setLogin(true);
}


if(login) {
    return (
            <div >
                <NavComponent />
                <div className='button-container'>
                <TimeComponent ip={ip}  />
                </div>

            </div>
        );


} else if (!login) {
    // Send IP address off to check for last session login
    return (
        <div className='button-container'>
            <button onClick={onClick}>Login</button>
            <h2>Your IP is = {ip}</h2>
        </div>
    );
}

}


export default LoginComponent;
