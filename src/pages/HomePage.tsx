import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { fetchGithubUsers } from '../lib/store';
import UserCard from '../components/Cards/UserCard/UserCard';
import SearchBar from '../components/SearchBar/SearchBar';
import { GithubUser } from '../types';

const HomePage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const { users, status, error } = useSelector((state: ReturnType<typeof store.getState>) => state.users);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch users when component mounts
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

  // Handling loading state
  if (status === 'loading') {
    return (
      <div className="list-items" data-testid="loading" key="loading">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
              <span>Loading</span> <span>user</span> <span>profile</span>
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Handling error state
  if (status === 'failed') {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="relative container w-4/5 flex flex-col flex-grow items-center justify-start gap-16 py-8">
      {/* Search Bar */}
      <div className='w-1/2'>
        <SearchBar placeholder="Search GitHub user..." onSearch={handleSearch} />
      </div>


      {/* Filtered Users List */}
      <div className="w-full grid grid-cols-2 gap-4 place-content-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: GithubUser) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <div className="text-lefttext-gray-500">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
