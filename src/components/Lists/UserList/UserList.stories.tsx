import UserList from './UserList';
import { GithubUser } from '../../../types';

// Mock user data for testing
const mockUsers: GithubUser[] = [
  {
    id: 1,
    login: 'octocat',
    avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
    html_url: 'https://github.com/octocat',
    repos_url: "https://api.github.com/users/octocat/repos",
  },
  {
    id: 2,
    login: 'doe',
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    html_url: 'https://github.com/doe',
    repos_url: "https://api.github.com/users/doe/repos",
  },
  {
    id: 3,
    login: 'johnsmith',
    avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
    html_url: 'https://github.com/johnsmith',
    repos_url: "https://api.github.com/users/johnsmith/repos",
  },
];

// Meta configuration for the Storybook story
export default {
  title: 'Components/Lists/UserList',
  component: UserList,
  tags: ['autodocs'],
  args: {
    users: mockUsers,
  },
};

/**
 * Default story showcasing a list of mock users.
 * 
 * This story displays a basic list of users using predefined mock data. 
 * It serves as a demonstration of the `UserList` component's default state.
 */
export const Default = {
  args: {
    users: mockUsers,
  },
};

/**
 * Empty state story for the `UserList` component.
 * 
 * This story demonstrates how the `UserList` component looks when no user data is provided.
 * It is useful for testing the component's behavior and appearance in an empty state.
 */
export const Empty = {
  args: {
    users: [],
  },
};

/**
 * Large list story for the `UserList` component.
 * 
 * This story displays a large number of mock users to test the component's performance 
 * and visual appearance with a large dataset.
 */
export const LargeList = {
  args: {
    users: [...Array(50)].map((_, index) => ({
      id: index,
      login: `user${index}`,
      avatar_url: `https://avatars.githubusercontent.com/u/${index}?v=4`,
      html_url: `https://github.com/user${index}`,
      repos_url: `https://api.github.com/users/${index}/repos`,
    })),
  },
};
