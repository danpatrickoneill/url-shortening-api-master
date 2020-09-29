import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className='links'>
        <a href='index.html'>
          <h2>Shortly</h2>
        </a>
        <a className='nav-link' href='#'>
          Pricing
        </a>
        <a className='nav-link' href='#'>
          Features
        </a>
        <a className='nav-link' href='#'>
          Resources
        </a>
      </div>
      <div className='actions'>
        <a className='nav-link' href='#'>
          Login
        </a>
        <a className='nav-link' href='#'>
          <button>Sign Up</button>
        </a>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
      </div>
    </nav>
  );
};

export default Nav;
