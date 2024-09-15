import { Meta, StoryObj } from '@storybook/react';
import UserList from './UserList';
import { GithubUser } from '../../../types';

// Mock user data
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

// Meta configuration for the story
export default {
  title: 'Components/UserList',
  component: UserList,
  tags: ['autodocs'],
  args: {
    users: mockUsers,
  },
};


// Default story showing the list of users
export const Default = {
  args: {
    users: mockUsers,
  },
};

// Empty state story (no users)
export const Empty = {
  args: {
    users: [],
  },
};

// Large list story to show many users
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
