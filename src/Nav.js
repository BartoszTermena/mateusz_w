import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark primary-color bg-dark'>
      <div
        className='collapse navbar-collapse justify-content-center text-center'
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              style={{
                color: 'white',
                margin: '1rem',
                textDecoration: 'inherit'
              }}
              to='/orders'
            >
              Orders
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{
                color: 'white',
                margin: '1rem',
                textDecoration: 'inherit'
              }}
              to='/customers'
            >
              customers
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{
                color: 'white',
                margin: '1rem',
                textDecoration: 'inherit'
              }}
              to='/products'
            >
              products
            </Link>
          </li>
          <li className='nav-item active'>
            <Link
              style={{
                color: 'white',
                margin: '1rem',
                textDecoration: 'inherit'
              }}
              to='/categories'
            >
              categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
