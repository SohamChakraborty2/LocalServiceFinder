import React, { useState } from "react";
import SearchIcon from '../../assets/search-icon.png'
import '../../styles/Application/searchbar.css'

const SearchBar = ({ categories, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="search-bar">
      <label htmlFor="categorySelect"><img src={SearchIcon} alt="" /></label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={handleSelectChange}
      >
        <option value="" disabled>Select a category...</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
