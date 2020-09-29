import React, { useRef, useState } from 'react';

const SavedLink = (props) => {
  const [copied, setCopied] = useState(false);
  const linkEl = useRef(null);
  const pair = props.pair;

  function copyLink(link) {
    // Creates dummy element from which to copy supplied text
    var dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = link;
    dummy.select();
    document.execCommand('copy');
    dummy.style.display = 'none';
    document.body.removeChild(dummy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className='saved-link'>
      <p>{pair[0]}</p>
      <div className='action-items'>
        <a href={[pair[1]]} id='link'>
          {pair[1]}
        </a>
        <button
          onClick={() => copyLink(pair[1])}
          style={copied ? { backgroundColor: '#403752' } : {}}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default SavedLink;
