import { GithubUser } from '../../../types';
import { Link } from 'react-router-dom';

/**
 * UserCard component displays information about a GitHub user.
 * 
 * This component creates a card that includes the user's avatar and login name.
 * It is a link that navigates to the user's detailed profile page.
 * 
 */
interface UserCardProps {
  user: GithubUser
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/user/${user.login}`} className="w-full bg-bgColor shadow-lg rounded-md p-4 flex items-center space-x-4 border border-textColor-200 transition-transform duration-500 hover:translate-y-1 break-words">
      <img
        className="w-14 h-14 rounded-full object-cover"
        src={user.avatar_url}
        alt={`${user.login}'s profile`}
      />
      <div>
        <h2 className="text-lg font-semibold text-textColor-700">{user.login}</h2>
      </div>
    </Link>
  );
};

export default UserCard;
