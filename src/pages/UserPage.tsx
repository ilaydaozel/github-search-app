import { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { fetchGithubRepositories, setFilterType, setFilterLanguage } from '../lib/store';
import { useParams } from 'react-router-dom';
import DropdownFilter from '../components/DropdownFilter/DropdownFilter';
import SearchBar from '../components/SearchBar/SearchBar';
import UserBio from '../components/UserBio/UserBio';

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
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className='relative container w-5/6 flex-grow py-16'>
      <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-4'>
         {/* Conditionally render UserBio only if the owner exists */}
         {repos[0]?.owner && <UserBio user={repos[0].owner} />}
        <div className='flex flex-col items-center justify-start md:gap-16 gap-8 lg:col-span-3'>
            <div className='w-full flex md:flex-row md:items-center flex-col md:gap-8 gap-2 items-end justify-end'>
                {/* Search Bar */}
                <SearchBar placeholder="Search repositories..." onSearch={handleSearch} />

                {/* Filters */}
                <div className="w-fit flex gap-2 flex-wrap md:flex-nowrap justify-end">
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
                            { value: 'CSS', label: 'CSS' },
                            { value: 'Erlang', label: 'Erlang' },
                            { value: 'Ruby', label: 'Ruby' },
                        ]}
                        selectedValue={filterLanguage}
                        onChange={(value) => dispatch(setFilterLanguage(value))}
                    />
                </div>
            </div>
            
            <Suspense fallback={<div>Loading repositories...</div>}>
                {filteredRepos.length > 0 ? (
                    <RepositoryList repositories={filteredRepos} />
                ) : (
                    <div className="text-gray-500">No repositories found.</div>
                )}
            </Suspense>
            </div>
      </div>
    </div>
  );
};

export default UserPage;
