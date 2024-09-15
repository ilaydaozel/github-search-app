import React from 'react';
import RepositoryCard from '../../Cards/RepositoryCard/RepositoryCard';
import { GithubRepository } from '../../../types';

interface RepositoryListProps {
    repositories: GithubRepository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))} 
    </div>
  );
};

export default RepositoryList;
