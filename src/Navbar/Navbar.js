import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md sticky-top  navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <i className='bi bi-heart d-inline-block align-text-top'></i>BrandName
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <div className='navbar-nav'>
            <a className='nav-link active' aria-current='page' href='#'>
              Home
            </a>
            <a className='nav-link' href='#'>
              Features
            </a>
            <a className='nav-link' href='#'>
              Pricing
            </a>
            <a className='nav-link disabled'>Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
