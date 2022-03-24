import '../Styles/App.css';
import React, { useEffect, useState } from 'react';

const NavComponent = () => {
  const onClick = () => {
    window.location.reload()
  }
    return (
          <div className='navBar'>
            <nav>
              <ul>
                <li>
                    Product listing
                </li>
                <li>
                   Account details
                </li>
                <li>
                    Orders
                </li>
                <li>
                    Online purchase system
                </li>
                <li onClick={onClick}>
                  Logout
                </li>
              </ul>
            </nav>

          </div>

      );

}


export default NavComponent;