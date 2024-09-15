import { GithubUser } from '../../../types';
import { Link } from 'react-router-dom';

interface UserCardProps {
  user: GithubUser
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/user/${user.login}`} className=" w-full bg-bgColor shadow-lg rounded-md p-4 flex items-center space-x-4 border border-textColor-200 ransition duration-300 hover:translate-y-1">
      <img
        className="w-14 h-14 rounded-full object-cover"
        src={user.avatar_url}
        alt={`${user.login}'s profile`}
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{user.login}</h2>
      </div>
    </Link>
  );
};

export default UserCard;
