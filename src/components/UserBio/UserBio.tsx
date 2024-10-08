import { GithubUser } from '../../types';

interface UserBioProps {
  user: GithubUser;
}

/**
 * Component for displaying user bio information.
 * 
 * This component renders the user's avatar, username, and a link to their GitHub profile.
 * It displays a loading message if the user information is not yet available.
 * 
 */

const UserBio = ({ user }: UserBioProps) => {
  if (!user) {
    // Display a loading message if user data is not yet available.
    return <div>Loading user...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-40 h-40 lg:w-48 lg:h-48 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{user.login}</h2>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary mt-4 transition-transform duration-500 hover:translate-y-1"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserBio;
