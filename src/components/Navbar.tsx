import SearchBar from './SearchBar';

const Navbar = () => {
    const handleSearch = (searchTerm: string) => {
        console.log(`Searching for: ${searchTerm}`);
        // Perform search or API call here
      };
  
    return (
      <nav className="bg-bgColor p-4 flex justify-between items-center">
        <a href="/" className="text-textColor-600 font-semibold text-md">Home</a>
        <SearchBar placeholder="Search GitHub user" onSearch={handleSearch} />
      </nav>
    )
};

export default Navbar;
