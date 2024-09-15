import UserCard from './UserCard';
import { GithubUser } from '../../../types';

// Mock data for a GitHub user
const mockUser: GithubUser = {
    id: 1,
    login: 'octocat',
    avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
    html_url: 'https://github.com/octocat',
    repos_url: "https://api.github.com/users/octocat/repos",
};

// Meta configuration for Storybook
export default {
  title: 'Components/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  args: {
    user: mockUser,
  },
};

// Default story showing a single user card
export const Default = {
  args: {
    user: mockUser,
  },
};

// Story with a different user
export const AnotherUser = {
  args: {
    user: {
      id: 2,
      login: 'johnsmith',
      avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
      html_url: 'https://github.com/johnsmith',
      repos_url: "https://api.github.com/users/johnsmith/repos",
    },
  },
};
