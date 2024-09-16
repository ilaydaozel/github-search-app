import { Meta, StoryObj } from '@storybook/react';
import RepositoryList from './RepositoryList';
import RepositoryCard from '../../Cards/RepositoryCard/RepositoryCard';
import { GithubRepository } from '../../../types';

// Mock data for the story
const mockRepositories: GithubRepository[] = [
  {
    id: 1,
    name: 'Repository One',
    description: 'Description for Repository One.',
    html_url: 'https://github.com/example/repository-one',
    private: false,
    language: 'JavaScript',
    owner: {    
        id: 1,
        login: 'octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
        html_url: 'https://github.com/octocat',
        repos_url: "https://api.github.com/users/octocat/repos",
        }
  },
  {
    id: 2,
    name: 'Repository Two',
    description: 'Description for Repository Two.',
    html_url: 'https://github.com/example/repository-two',
    private: true,
    language: 'TypeScript',
    owner: {    
        id: 1,
        login: 'octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
        html_url: 'https://github.com/octocat',
        repos_url: "https://api.github.com/users/octocat/repos",
        }
  },
  {
    id: 3,
    name: 'Repository Three',
    description: 'Description for Repository Three.',
    html_url: 'https://github.com/example/repository-three',
    private: false,
    language: 'Python',
    owner: {    
        id: 1,
        login: 'octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
        html_url: 'https://github.com/octocat',
        repos_url: "https://api.github.com/users/octocat/repos",
        }
  },
];

// Define the component's meta information
export default {
  title: 'Components/Lists/RepositoryList',
  component: RepositoryList,
  tags: ['autodocs'],
  args: {
    repositories: mockRepositories,
  },
};


// Default RepositoryList Story
export const Default = {
  args: {
    repositories: mockRepositories,
  },
};
