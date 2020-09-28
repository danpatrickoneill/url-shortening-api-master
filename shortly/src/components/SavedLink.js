import React from 'react';

const SavedLink = (props) => {
  const pair = props.pair;
  return (
    <div className='saved-link'>
      <p>{pair[0]}</p>
      <div className='action-items'>
        <a href={[pair[1]]}>{pair[1]}</a>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default SavedLink;
