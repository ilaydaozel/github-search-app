// UsersList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { fetchGithubUsers } from '../../../lib/store';


const UsersList: React.FC = () => {
const dispatch = useDispatch<typeof store.dispatch>();
  // We're retrieving the error field from our updated store
  const { users, status, error } = useSelector((state: ReturnType<typeof store.getState>) => state.users);
  // The useEffect triggers the data fetching when the component is mounted
  useEffect(() => {
    dispatch(fetchGithubUsers());
  }, []);
  console.log("users", users)
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
