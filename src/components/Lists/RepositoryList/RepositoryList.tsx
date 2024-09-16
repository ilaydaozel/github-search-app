import React from 'react';
import RepositoryCard from '../../Cards/RepositoryCard/RepositoryCard';
import { GithubRepository } from '../../../types';

interface RepositoryListProps {
  repositories: GithubRepository[];
}

/**
 * Component for displaying a list of repositories.
 * 
 * This component renders a grid of repository cards based on the provided 
 * list of repositories. It uses responsive grid layout to display cards 
 * in a single column on small screens, two columns on medium screens, 
 * and three columns on large screens.
 * 
 */
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
