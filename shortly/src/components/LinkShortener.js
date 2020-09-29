import React, { useState, useRef, useEffect } from 'react';
import SavedLinksContainer from './SavedLinksContainer';
import { useLocalStorage } from '../utilities/useLocalStorage';
const axios = require('axios');

const LinkShortener = () => {
  const [link, setLink] = useState('');
  const [shortened, setShortened] = useState('');
  const [fetching, setFetching] = useState(false);
  const [missing, setMissing] = useState(false);
  const [linkPairs, setLinkPairs] = useLocalStorage('links', []);
  const inputEl = useRef(null);

  const handleChange = (e) => {
    if (missing) {
      setMissing(false);
    }
    setLink(e.target.value);
  };

  useEffect(() => {
    if (shortened.length > 0) {
      setFetching(false);
      setLink('');
      setLinkPairs((linkPairs) => linkPairs.concat([[link, shortened]]));
      localStorage.setItem('links', JSON.stringify(linkPairs));
    }
  }, [shortened]);

  const shortenLink = (e) => {
    e.preventDefault();
    if (link.length < 1) {
      setMissing(true);
    } else {
      setFetching(true);
      axios
        .post('https://rel.ink/api/links/', { url: link })
        .then((res) => {
          console.log(res.data);
          setShortened('https://rel.ink/' + res.data.hashid);
          // localStorage.setItem('links', JSON.stringify(linkPairs));
          // Works to update value, but timing is off with state
          inputEl.current.value = '';
        })
        .catch((err) => {
          console.log(err);
          window.alert(
            'Something went wrong; please check your link and try again!'
          );
          setFetching(false);
        });
    }
  };

  return (
    <>
      <form className='link-shortener' onSubmit={(e) => shortenLink(e)}>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Shorten a link here...'
            onChange={(e) => handleChange(e)}
            ref={inputEl}
            style={missing ? { border: '2px solid red', color: 'red' } : {}}
          />
          <p style={missing ? {} : { visibility: 'hidden' }}>
            Please add a link
          </p>
        </div>
        <button>{fetching ? 'Fetching...' : 'Shorten It!'}</button>
      </form>
      <SavedLinksContainer linkPairs={linkPairs} />
    </>
  );
};

export default LinkShortener;
