import '../Styles/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function LoginComponent() {
    const [ip, setIP] = useState('');

const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
}

useEffect(() => {
    getData();
}, [])

const toTime = () => {


}
    // TODO: Redirect to main page on press

    return (
        <div className='button-container'>
            <button onClick={toTime}>Login</button>
            <h2>Your IP is = {ip}</h2>
        </div>
    );
}


export default LoginComponent;
