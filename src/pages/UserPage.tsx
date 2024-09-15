import { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { fetchGithubRepositories, setFilterType, setFilterLanguage } from '../lib/store';
import { useParams } from 'react-router-dom';
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
import SearchBar from '../components/SearchBar/SearchBar';

const RepositoryList = lazy(() => import('../components/Lists/RepositoryList/RepositoryList'));

const UserPage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const { username } = useParams<{ username: string }>();
  const { repos, status, error, filterType, filterLanguage } = useSelector((state: ReturnType<typeof store.getState>) => state.repositories);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRepos, setFilteredRepos] = useState(repos);

  useEffect(() => {    
    if (username) {
      dispatch(fetchGithubRepositories(username));
    }
  }, [dispatch, username]);

  useEffect(() => {
    let result = repos;

    // Apply type filter
    if (filterType !== 'all') {
      result = result.filter(repo => repo.private === (filterType === 'private'));
    }

    // Apply language filter
    if (filterLanguage !== 'all') {
      result = result.filter(repo => repo.language === filterLanguage);
    }

    // Apply search term filter
    result = result.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRepos(result);
  }, [filterType, filterLanguage, searchTerm, repos]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='relative container w-4/5 flex flex-col flex-grow items-center justify-start gap-16 py-8'>
      <h1>{username}'s Repositories</h1>
      <div className='w-full flex gap-8 items-center justify-end'>
        {/* Search Bar */}
        <SearchBar placeholder="Search repositories..." onSearch={handleSearch} />

        {/* Filters */}
        <div className="flex gap-2">
            <DropdownFilter
            id="repo-type"
            label="Type:"
            options={[
                { value: 'all', label: 'All' },
                { value: 'public', label: 'Public' },
                { value: 'private', label: 'Private' },
            ]}
            selectedValue={filterType}
            onChange={(value) => dispatch(setFilterType(value as 'all' | 'public' | 'private'))}
            />

            <DropdownFilter
            id="repo-language"
            label="Language:"
            options={[
                { value: 'all', label: 'All' },
                { value: 'JavaScript', label: 'JavaScript' },
                { value: 'TypeScript', label: 'TypeScript' },
                { value: 'Python', label: 'Python' },
                { value: 'Ruby', label: 'Ruby' },
                { value: 'Erlang', label: 'Erlang' },
                { value: 'CSS', label: 'CSS' },
            ]}
            selectedValue={filterLanguage}
            onChange={(value) => dispatch(setFilterLanguage(value))}
            />
        </div>
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
