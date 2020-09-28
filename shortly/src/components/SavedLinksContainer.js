import React from 'react';
import SavedLink from './SavedLink';

const SavedLinksContainer = (props) => {
  let keyCount = 0;
  return (
    <div className='saved-links-container'>
      {props.linkPairs.length > 0
        ? props.linkPairs.map((pair) => {
            keyCount++;
            return <SavedLink pair={pair} key={keyCount} />;
          })
        : ''}
    </div>
  );
};

export default SavedLinksContainer;
