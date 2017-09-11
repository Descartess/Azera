import React from 'react';

const Search = () => (
  <div className="search-bar">
    <div className="ui fluid category search">
      <div className="ui icon input receipt-search">
        <input className="prompt" type="text" placeholder="Search receipt..." />
        <i className="search icon" />
      </div>
      <div className="results" />
    </div>
  </div>
);

export default Search;
