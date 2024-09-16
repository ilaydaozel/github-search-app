import React, { useState } from 'react';

/**
 * Props for the SearchBar component.
 * 
 * @interface SearchBarProps
 * @property {string} [placeholder] - The placeholder text for the input field.
 * @property {(searchTerm: string) => void} onSearch - Callback function to handle search input changes.
 */
interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

/**
 * A search bar component that allows users to input search terms.
 * 
 */

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => {
  // State to keep track of the current search term.
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handles changes to the search input field.
   * Updates the search term state and triggers the onSearch callback.
   * 
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center space-x-2 w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="min-w-4 w-full p-2 bg-textColor-50 border border-textColor-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
