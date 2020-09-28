import React from 'react';
import illustration from '../images/illustration-working.svg';

const Header = () => {
  return (
    <header>
      <div className='text'>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <div className='image'>
        <img
          src={illustration}
          alt='A faceless figure sitting at a desk using a computer'
        />
      </div>
    </header>
  );
};

export default Header;
