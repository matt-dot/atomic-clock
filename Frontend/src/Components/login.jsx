import '../Styles/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimeComponent from './time'
import NavComponent from './nav';

function LoginComponent() {
    const [ip, setIP] = useState('');
    const [login, setLogin] = useState(false);

const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
}

useEffect(() => {
    getData();
    localStorage.setItem('bTime', localStorage.getItem('aTime'))
}, [])

const onClick = () => {
    setLogin(true);
}

if(login) {
    return (
            <div >
                <NavComponent login={login} setLogin={setLogin} />
                <TimeComponent ip={ip} />
            </div>
    );

} else if (!login) {
    return (
        <div className='button-container'>
            <button onClick={onClick}>Login</button>
            <h2>Your IP is = {ip}</h2>
        </div>
    );
}
}

export default LoginComponent;
