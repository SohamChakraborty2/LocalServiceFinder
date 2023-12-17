import React, { useState } from "react";

const SearchBar = ({ categories, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Filter categories based on the input
    const filteredSuggestions = categories.filter((category) =>
      category.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSelectCategory = (category) => {
    setSearchTerm("");
    setSuggestions([]);
    onSelect(category);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a category..."
      />
      <ul>
        {suggestions.map((category) => (
          <li key={category} onClick={() => handleSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
