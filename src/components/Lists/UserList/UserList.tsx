import UserCard from '../../Cards/UserCard/UserCard';
import { GithubUser } from '../../../types';

/**
 * Component for displaying a list of GitHub users.
 * 
 * This component takes an array of GitHub users and renders each user as a `UserCard` component.
 * The list is displayed in a responsive grid layout that adapts to different screen sizes.
 * 
 */
const UserList = ({ users }: { users: GithubUser[] }) => {
  
  // Rendering the list of users
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
