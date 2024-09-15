import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { fetchGithubRepositories } from '../lib/store';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';

// Lazy load the RepositoryList component
const RepositoryList = lazy(() => import('../components/Lists/RepositoryList/RepositoryList'));

const UserPage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const { username } = useParams<{ username: string }>();
  const { repos, status, error } = useSelector((state: ReturnType<typeof store.getState>) => state.repositories);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (username) {
      dispatch(fetchGithubRepositories(username));
    }
  }, [dispatch, username]);

  // Filter repositories based on search term
  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  if (status === 'loading') {
    return <div>Loading user data...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative container w-4/5 flex flex-col flex-grow items-center justify-start gap-16 py-8">
      <h1>{username}'s Repositories</h1>
      
      {/* Search Bar */}
      <div className="relative w-1/2 mx-auto mb-4">
        <SearchBar placeholder="Search repositories..." onSearch={handleSearch} />
      </div>

      <Suspense fallback={<div>Loading repositories...</div>}>
        <div>
          {filteredRepos.length > 0 ? (
            <RepositoryList repositories={filteredRepos} />
          ) : (
            <div className="text-gray-500">No repositories found.</div>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default UserPage;
