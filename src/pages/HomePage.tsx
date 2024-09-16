import { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { fetchGithubUsers } from '../lib/store';
import SearchBar from '../components/SearchBar/SearchBar';
import { GithubUser } from '../types';

// Lazy load the UserList component
const UserList = lazy(() => import('../components/Lists/UserList/UserList'));

const HomePage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const { users, status, error } = useSelector((state: ReturnType<typeof store.getState>) => state.users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchGithubUsers());
  }, [dispatch]);

  // Filter users based on search term
  const filteredUsers = users.filter((user: GithubUser) => 
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  if (status === 'loading') {
    return <div data-testid="loading" key={"loading"}>Loading users...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative container w-4/5 flex flex-col flex-grow items-center justify-start gap-8 md:gap-16 py-12">
      {/* Search Bar */}
      <div className='w-full md:w-1/2'>
        <SearchBar placeholder="Search GitHub user..." onSearch={handleSearch} />
      </div>

      {/* Suspense for UserList */}
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
