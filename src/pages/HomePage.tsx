import { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { fetchGithubUsers } from '../lib/store';
import SearchBar from '../components/SearchBar/SearchBar';
import { GithubUser } from '../types';

// Lazy load the UserList component
const UserList = lazy(() => import('../components/Lists/UserList/UserList'));

/**
 * HomePage component is the main entry point for displaying GitHub users.
 * It includes a search bar and a lazy-loaded user list.
 * 
 */
const HomePage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  
  // Extracting users, status, and error from the Redux store
  const { users, status, error } = useSelector((state: ReturnType<typeof store.getState>) => state.users);
  
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * useEffect hook to dispatch fetchGithubUsers action when the component mounts.
   */
  useEffect(() => {
    dispatch(fetchGithubUsers());
  }, [dispatch]);

  /**
   * Filters users based on the search term input.
   * 
   */
  const filteredUsers = users.filter((user: GithubUser) => 
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Handler for the search input field.
   * Updates the state when the user types in the search bar.
   * 
   * @param {string} term - The search term typed by the user.
   */
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  /**
   * Conditional rendering for loading and error states.
   * If the status is loading or failed, show appropriate messages.
   */
  if (status === 'loading') {
    return <div data-testid="loading" key={"loading"}>Loading users...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative container w-4/5 flex flex-col flex-grow items-center justify-start gap-8 md:gap-16 py-12">
      {/* Search Bar for GitHub users */}
      <div className='w-full md:w-1/2'>
        <SearchBar placeholder="Search GitHub user..." onSearch={handleSearch} />
      </div>

      {/* Suspense to lazily load the UserList component */}
      <Suspense fallback={<div>Loading user list...</div>}>
        {filteredUsers.length > 0 ? (
          <UserList users={filteredUsers} />
        ) : (
          <div className="text-gray-500">No users found.</div>
        )}
      </Suspense>
    </div>
  );
};

export default HomePage;
