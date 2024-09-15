import { GithubRepository } from '../../../types';

interface RepositoryCardProps {
  repository: GithubRepository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  return (
    <div className="bg-bgColor shadow-lg rounded-md p-4 flex flex-col space-y-2 border border-textColor-200 transition duration-300 hover:translate-y-1">
      <h3 className="text-xl font-semibold text-gray-800">{repository.name}</h3>
      <p className="text-gray-600">{repository.description}</p>
      <span className="text-sm text-gray-500">{repository.language}</span>
    </div>
  );
};

export default RepositoryCard;
