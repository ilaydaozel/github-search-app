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
  tags: ['autodocs'], // Tags for the Storybook documentation.
  args: {
    user: mockUser,
  },
};

/**
 * Default story for the UserBio component.
 * Shows the UserBio component with mock user data.
 */
export const Default = {
  args: {
    user: mockUser,
  },
};

/**
 * Story for the loading state of the UserBio component.
 * Shows the UserBio component with no user data available.
 */
export const Loading = {
  args: {
    user: undefined,
  },
};
