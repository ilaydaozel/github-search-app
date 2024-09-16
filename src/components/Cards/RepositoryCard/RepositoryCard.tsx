import React from 'react';
import { GithubRepository } from '../../../types';
import { Link } from 'react-router-dom';

interface RepositoryCardProps {
  repository: GithubRepository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <Link to={repository.html_url} className="bg-bgColor flex flex-col justify-between gap-2 shadow-md rounded-md p-4 border border-textColor-200 transition-transform duration-500 hover:translate-y-1 break-words">
      <h2 className="text-lg font-semibold text-primary">{repository.name}</h2>
      <div className="text-sm text-textColor-600">{repository.description}</div>
      <div className='flex gap-2 text-textColor-400 text-xs items-center'>
        <p className="bg-textColor-300 rounded-md px-2 py-1 text-bgColor">{repository.private ? 'Private' : 'Public'}</p>
        <p>{repository.language}</p>
      </div>  
    </Link>
  );
};
export default RepositoryCard;
