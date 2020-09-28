import React, { useState, useRef, useEffect } from 'react';
import SavedLinksContainer from './SavedLinksContainer';
import { useLocalStorage } from '../utilities/useLocalStorage';
const axios = require('axios');

const LinkShortener = () => {
  const [link, setLink] = useState('https://news.ycombinator.com/');
  const [shortened, setShortened] = useState('');
  const [fetching, setFetching] = useState(false);
  const [linkPairs, setLinkPairs] = useLocalStorage('links', []);
  const inputEl = useRef(null);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  useEffect(() => {
    if (shortened.length > 0) {
      setFetching(false);
      setLinkPairs((linkPairs) => linkPairs.concat([[link, shortened]]));
      localStorage.setItem('links', JSON.stringify(linkPairs));
    }
  }, [shortened]);

  const shortenLink = (e) => {
    e.preventDefault();
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
        setFetching(false);
      });
  };

  return (
    <>
      <form className='link-shortener' onSubmit={(e) => shortenLink(e)}>
        <input
          type='text'
          placeholder='Shorten a link here...'
          onChange={(e) => handleChange(e)}
          ref={inputEl}
        />
        <button>{fetching ? 'Fetching...' : 'Shorten It!'}</button>
      </form>
      <SavedLinksContainer linkPairs={linkPairs} />
    </>
  );
};

export default LinkShortener;
