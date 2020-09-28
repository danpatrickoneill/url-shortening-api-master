import React from 'react';

class LinkShortener extends React.Component {
  render() {
    return (
      <form class='link-shortener' onsubmit='UserAction(); return false;'>
        <input type='text' placeholder='Shorten a link here...' />
        <button>Shorten It!</button>
      </form>
    );
  }
}

export default LinkShortener;
