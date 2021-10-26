import React from 'react';
import './Navbar.scss';

function Navbar({ active, setActive }) {
  return (
    <nav className='navbar navbar-expand-md sticky-top   navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          href='#'
          onClick={() => setActive(active + 1)}
        >
          <i className='bi bi-heart d-inline-block align-text-top'></i>
          {active}
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
            <a className='nav-link' aria-current='page' href='#first'>
              About
            </a>
            <a className='nav-link' href='#reactProjects'>
              React Projects
            </a>
            <a className='nav-link' href='#djangoProjects'>
              Django Projects
            </a>
            <a className='nav-link' href='#javascriptAndPython'>
              JavaScript and Python
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
