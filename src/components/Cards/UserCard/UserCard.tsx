import React from 'react';
import { GithubUser } from '../../../types';

interface UserCardProps {
  user: GithubUser
}

const UserCard: React.FC<UserCardProps> = ({ user }: UserCardProps) => {
  return (
    <div className="bg-bgColor shadow-lg rounded-md p-4 flex items-center space-x-4 border border-textColor-200">
      <img
        className="w-14 h-14 rounded-full object-cover"
        src={user.avatar_url}
        alt={`${user.login}'s profile`}
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{user.login}</h2>
      </div>
    </div>
  );
};

export default UserCard;
