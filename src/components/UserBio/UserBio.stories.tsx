import UserBio from './UserBio';
import { GithubUser } from '../../types';

// Mock data for the story
const mockUser: GithubUser = {
    login: 'octocat',
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    html_url: 'https://github.com/octocat',
    id: 0,
    repos_url: ''
};

export default {
  title: 'Components/UserBio',
  component: UserBio,
  args: {
    user: mockUser,
  },
};

// Default UserBio Story
export const Default= {
  args: {
    user: mockUser,
  },
};

// Story for when user data is not available (e.g., loading state)
export const Loading = {
  args: {
    user: undefined,
  },
};
