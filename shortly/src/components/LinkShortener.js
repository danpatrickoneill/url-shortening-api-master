import React, { useState } from 'react';
const axios = require('axios');

const LinkShortener = () => {
  const [link, setLink] = useState('https://news.ycombinator.com/');
  const [shortened, setShortened] = useState('');
  const [fetching, setFetching] = useState(false);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const shortenLink = (e) => {
    e.preventDefault();
    setFetching(true);
    axios
      .post('https://rel.ink/api/links/', { url: link })
      .then((res) => {
        console.log(res.data);
        setShortened('https://rel.ink/' + res.data.hashid);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setFetching(false);
      });
  };

  return (
    <form className='link-shortener' onSubmit={(e) => shortenLink(e)}>
      <input
        type='text'
        placeholder='Shorten a link here...'
        onChange={(e) => handleChange(e)}
      />
      <button>{fetching ? 'Fetching...' : 'Shorten It!'}</button>
    </form>
  );
};

export default LinkShortener;
