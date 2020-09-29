import React from 'react';
import LinkShortener from './LinkShortener';
import graph from '../images/icon-brand-recognition.svg';
import gauge from '../images/icon-detailed-records.svg';
import utensils from '../images/icon-fully-customizable.svg';

const MainContent = () => {
  return (
    <main className='full-width-main'>
      <LinkShortener />
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className='cards-wrapper'>
        <svg className='desktop-line' height='300' width='1000'>
          <line
            x1='100'
            y1='200'
            x2='4000'
            y2='200'
            style={{
              stroke: 'hsl(180, 66%, 49%)',
              strokeWidth: 10,
              position: 'absolute',
            }}
          />
        </svg>
        <div className='card card-1'>
          <img src={graph} alt='A generic bar graph indicating growth' />
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className='card card-2'>
          <img
            src={gauge}
            alt='A generic radial gauge pointing right to its middle'
          />
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className='card card-3'>
          <img src={utensils} alt='A marker, a fountain pen and a paintbrush' />
          <h4>Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
