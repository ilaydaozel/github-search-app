import RepositoryList from './RepositoryList';
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
    },
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
    },
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
    },
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

/**
 * Default story showing a list of repositories.
 * 
 * This story renders the `RepositoryList` component with mock data for repositories.
 */
export const Default = {
  args: {
    repositories: mockRepositories,
  },
};

/**
 * Story for an empty list of repositories.
 * 
 * This story tests how the `RepositoryList` component handles an empty array of repositories.
 */
export const Empty = {
  args: {
    repositories: [],
  },
};

/**
 * Story for a large list of repositories to test the component's performance with many items.
 * 
 * This story renders the `RepositoryList` component with a large number of repository items.
 */
export const LargeList = {
  args: {
    repositories: [...Array(50)].map((_, index) => ({
      id: index + 1,
      name: `Repository ${index + 1}`,
      description: `Description for Repository ${index + 1}.`,
      html_url: `https://github.com/example/repository-${index + 1}`,
      private: index % 2 === 0,
      language: index % 2 === 0 ? 'JavaScript' : 'TypeScript',
      owner: {
        id: 1,
        login: 'octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
        html_url: 'https://github.com/octocat',
        repos_url: "https://api.github.com/users/octocat/repos",
      },
    })),
  },
};

/**
 * Story for a list of repositories with mixed privacy statuses.
 * 
 * This story renders the `RepositoryList` component with repositories that have both public and private statuses.
 */
export const MixedPrivacy = {
  args: {
    repositories: [
      {
        id: 1,
        name: 'Public Repo',
        description: 'A public repository.',
        html_url: 'https://github.com/example/public-repo',
        private: false,
        language: 'JavaScript',
        owner: {
          id: 1,
          login: 'octocat',
          avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
          html_url: 'https://github.com/octocat',
          repos_url: "https://api.github.com/users/octocat/repos",
        },
      },
      {
        id: 2,
        name: 'Private Repo',
        description: 'A private repository.',
        html_url: 'https://github.com/example/private-repo',
        private: true,
        language: 'TypeScript',
        owner: {
          id: 1,
          login: 'octocat',
          avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
          html_url: 'https://github.com/octocat',
          repos_url: "https://api.github.com/users/octocat/repos",
        },
      },
    ],
  },
};
