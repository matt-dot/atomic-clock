import '../Styles/App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// TODO: Routing
const NavComponent = () => {
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
              </ul>
            </nav>

          </div>

      );
    }

    function Home() {
        return <h2>Home</h2>;
      }

      function About() {
        return <h2>About</h2>;
      }

      function Users() {
        return <h2>Users</h2>;
      }
export default NavComponent;