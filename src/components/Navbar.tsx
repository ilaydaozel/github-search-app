import SearchBar from './SearchBar';

const Navbar = () => {
    const handleSearch = (searchTerm: string) => {
        console.log(`Searching for: ${searchTerm}`);
        // Perform search or API call here
      };
  
    return (
      <nav className="fixed z-10 bg-bgColor px-8 py-4 w-full shadow-sm">
        <div className='flex justify-between items-center'>
            <a href="/" className="text-textColor-600 font-semibold text-md transition duration-300 hover:translate-y-1">Home</a>
            <SearchBar placeholder="Search GitHub user" onSearch={handleSearch} />
        </div>
      </nav>
    )
};

export default Navbar;
