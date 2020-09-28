import React, { useState } from 'react';

const SavedLinks = (props) => {
  return (
    <div className='saved-links-container'>
      {props.props.length > 0
        ? props.props.map((pair) => (
            <div className='saved-link'>
              <p>{pair[0]}</p>
              <a href={[pair[1]]}>{pair[1]}</a>
              <button>Copy</button>
            </div>
          ))
        : ''}
    </div>
  );
};

export default SavedLinks;
