import UserCard from '../../Cards/UserCard/UserCard';
import { GithubUser } from '../../../types';

const UserList = ({ users }: { users: GithubUser[]}) => {
  
  // Rendering the list of users
  return (
    <div className="grid grid-cols-2 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
