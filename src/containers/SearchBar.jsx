/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable arrow-spacing */
/* eslint-disable no-trailing-spaces */
import React from 'react';
// import PropTypes from 'prop-types';

const SearchBar = ({ onChangeValue }) =>{
  
  const handleChange = (evt) => {
    onChangeValue(evt.target.value);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          data-cy="search-bar"
          type="search"
          placeholder="Search pokemon"
          onChange={handleChange}
        />
      </div>
    </div>
  );
// eslint-disable-next-line semi
}

export default SearchBar;
SearchBar.propTypes = {
};
