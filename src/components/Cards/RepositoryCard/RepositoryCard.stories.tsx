import RepositoryCard from './RepositoryCard';
import { GithubRepository } from '../../../types';

// Mock data for the story
const mockRepository: GithubRepository = {
  id: 1,
  name: 'Example Repository',
  description: 'This is an example repository description.',
  html_url: 'https://github.com/example/repository',
  private: false,
  language: 'TypeScript',
  owner: {    
    id: 1,
    login: 'octocat',
    avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
    html_url: 'https://github.com/octocat',
    repos_url: "https://api.github.com/users/octocat/repos",
  }
};

/**
 * Storybook configuration for the `RepositoryCard` component.
 * 
 * This configuration provides a default story for the `RepositoryCard` component
 * using mock data to illustrate its appearance and functionality.
 * 
 */
export default {
  title: 'Components/Cards/RepositoryCard',
  component: RepositoryCard,
  tags: ['autodocs'],
  args: {
    repository: mockRepository,
  },
};

// Default RepositoryCard Story
export const Default = {
  args: {
    repository: mockRepository,
  },
};
