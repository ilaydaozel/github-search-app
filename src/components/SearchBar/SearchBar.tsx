import React, { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="min-w-4 p-2 border border-textColor-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
};

export default SearchBar;
