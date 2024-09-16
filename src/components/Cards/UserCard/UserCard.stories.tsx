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
/**
 * Storybook configuration for the UserCard component.
 * 
 */
export default {
  title: 'Components/Cards/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  args: {
    user: mockUser,
  },
};

/**
 * Default story showing a single user card.
 * 
 */
export const Default = {
  args: {
    user: mockUser,
  },
};