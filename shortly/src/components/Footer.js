import React from 'react';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div class='call-to-action'>
        <h3>Boost your links today</h3>
        <button>Get Started</button>
      </div>
      <nav>
        <a href='index.html'>
          <h2>Shortly</h2>
        </a>
        <div class='column'>
          <h5>Features</h5>
          <a href='#'>Link Shortening</a>
          <a href='#'>Branded Links</a>
          <a href='#'>Analytics</a>
        </div>
        <div class='column'>
          <h5>Resources</h5>
          <a href='#'>Blog</a>
          <a href='#'>Developers</a>
          <a href='#'>Support</a>
        </div>
        <div class='column'>
          <h5>Company</h5>
          <a href='#'>About</a>
          <a href='#'>Our Team</a>
          <a href='#'>Careers</a>
          <a href='#'>Contact</a>
        </div>
        <div class='social-icons'>
          <a href='#'>
            <img
              src={facebook}
              alt="Facebook's logo, a lowercase f inside a little square"
            />
          </a>
          <a href='#'>
            <img src={twitter} alt="Twitter's logo, a cartoonish little bird" />
          </a>
          <a href='#'>
            <img
              src={pinterest}
              alt="Pinterest's logo, a P inside of a circle"
            />
          </a>
          <a href='#'>
            <img src={instagram} alt="Instagram's logo, a little camera" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
