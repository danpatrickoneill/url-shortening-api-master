import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className='links'>
        <a href='index.html'>
          <h2>Shortly</h2>
        </a>
        <a href='#'>Pricing</a>
        <a href='#'>Features</a>
        <a href='#'>Resources</a>
      </div>
      <div className='actions'>
        <a href='#'>Login</a>
        <a href='#'>
          <button>Sign Up</button>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
