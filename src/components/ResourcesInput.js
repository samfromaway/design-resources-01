import React, { useContext } from 'react';

import { ResourcesContext } from '../context/ResourcesContext';
import { Star, Search, Cancel, ArrowDropDown } from '@material-ui/icons';

const ResourcesInput = ({ resources }) => {
  const { searchTextQuery, searchDropdownQuery, showFavorites } = useContext(
    ResourcesContext
  );

  const [searchTextQueryValue, setSearchTextQueryValue] = searchTextQuery;
  const [
    searchDropdownQueryValue,
    setSearchDropdownQueryValue,
  ] = searchDropdownQuery;
  const [showFavoritesValue, setShowFavoritesValue] = showFavorites;

  const resourceCategories = () => {
    const allCategories = resources.map((resource) => resource.category);
    return ['All Categories', ...new Set(allCategories)];
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    setSearchTextQueryValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    e.preventDefault();
    setSearchDropdownQueryValue(e.target.value);
  };

  const toggleFavorites = (e) => {
    setShowFavoritesValue(e.target.checked);
    starStyle(e.target.checked);
  };

  const starStyle = () => {
    return showFavoritesValue ? { color: 'yellow' } : { color: 'white' };
  };

  const resetTextSearch = () => {
    setSearchTextQueryValue('');
  };
  return (
    <div className='search-page'>
      <h1 className='title'>Find Design Resources</h1>
      <h2 className='sub-title'>Search like there is no tomorrow 🧐</h2>

      <div className='inputs'>
        <div className='text-input'>
          <input
            className='text-input-input'
            placeholder='Search...'
            onChange={(e) => handleTextChange(e)}
            value={searchTextQueryValue}
          ></input>
          <Search className='search-icon' style={{ fontSize: 30 }} />
          <Cancel
            style={{ fontSize: 30 }}
            className='text-input-cancel'
            onClick={() => resetTextSearch()}
          />
        </div>
        <div className='dropdown-wrapper'>
          <select
            className='dropdown'
            value={searchDropdownQueryValue}
            onChange={handleDropdownChange}
          >
            {resourceCategories().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ArrowDropDown className='arrow-dropdown' style={{ fontSize: 50 }} />
        </div>
        <div className='show-favorites-label-wrapper'></div>
        <label className='show-favorites-label'>
          Show Favorites
          <input
            checked={showFavoritesValue}
            type='checkbox'
            style={{ display: 'none' }}
            className='checkbox'
            onChange={toggleFavorites}
          />
          <Star className='star-icon' style={starStyle()} />
        </label>
      </div>
    </div>
  );
};

export default ResourcesInput;
