import React from "react";
import PropTypes from "prop-types";

export default function Navbar(myProps) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${myProps.mode} bg-${myProps.mode}`}
    >
      <div className='container'>
        <a className='navbar-brand' href='/'>
          My First App
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                About
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='/'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='/'>
                Disabled
              </a>
            </li>
          </ul>
          {/* <button className='btn btn-outline-success mx-1' type='submit'>
            Login
          </button>
          <button className='btn btn-outline-success mx-1' type='submit'>
            Signup
          </button> */}
          <button className='btn btn-outline-success mx-1' type='submit'>
            {myProps.userName}
          </button>
          <button className='btn btn-outline-success mx-1' type='submit'>
            Logout
          </button>
          <div
            className={`form-check form-switch text-${
              myProps.mode === "dark" ? "light" : "dark"
            }`}
          >
            <label className='custom-control-label' htmlFor='customSwitch1'>
              {`${
                myProps.mode === "dark"
                  ? "Enable Light Mode"
                  : "Enable Dark Mode"
              }`}
            </label>
            <input
              type='checkbox'
              className='form-check-input'
              id='customSwitch1'
              onClick={myProps.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

//Optional but recommented by me
Navbar.propTypes = {
  userName: PropTypes.string.isRequired,
  isUserLoggedIn: PropTypes.string,
};

Navbar.defaultProps = {
  userName: "User Name Missing",
  isUserLoggedIn: "false",
};
