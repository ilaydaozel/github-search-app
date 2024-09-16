import HomePage from './HomePage';
import store from '../lib/store';
import { GithubUser } from '../types';
import { http, HttpResponse } from 'msw';
import { Provider } from 'react-redux';
import { within, fireEvent, waitFor, waitForElementToBeRemoved } from '@storybook/test';
import { expect } from '@storybook/jest'

// Mock data
const mockUsers: GithubUser[] = [
    {
      login: 'octocat', avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4', html_url: 'https://github.com/octocat',
      id: 0,
      repos_url: ''
    },
    {
        login: 'torvalds', avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4', html_url: 'https://github.com/torvalds',
        id: 0,
        repos_url: ''
    },
  {
    login: 'pjhyett',
    avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
    html_url: 'https://github.com/pjhyett',
    id: 3,
    repos_url: 'https://api.github.com/users/pjhyett/repos'
  },
  {
    login: 'wayneeseguin',
    avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
    html_url: 'https://github.com/wayneeseguin',
    id: 4,
    repos_url: 'https://api.github.com/users/wayneeseguin/repos'
  },
  {
    login: 'brynary',
    avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
    html_url: 'https://github.com/brynary',
    id: 5,
    repos_url: 'https://api.github.com/users/brynary/repos'
  },
  {
    login: 'tenderlove',
    avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4',
    html_url: 'https://github.com/tenderlove',
    id: 6,
    repos_url: 'https://api.github.com/users/tenderlove/repos'
  },
  {
    login: 'steveklabnik',
    avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4',
    html_url: 'https://github.com/steveklabnik',
    id: 7,
    repos_url: 'https://api.github.com/users/steveklabnik/repos'
  },
  {
    login: 'excid3',
    avatar_url: 'https://avatars.githubusercontent.com/u/8?v=4',
    html_url: 'https://github.com/excid3',
    id: 8,
    repos_url: 'https://api.github.com/users/excid3/repos'
  },
  {
    login: 'kensmith',
    avatar_url: 'https://avatars.githubusercontent.com/u/9?v=4',
    html_url: 'https://github.com/kensmith',
    id: 9,
    repos_url: 'https://api.github.com/users/kensmith/repos'
  },
  {
    login: 'johndoe',
    avatar_url: 'https://avatars.githubusercontent.com/u/10?v=4',
    html_url: 'https://github.com/johndoe',
    id: 10,
    repos_url: 'https://api.github.com/users/johndoe/repos'
  }
];

// Mock state for success
const MockedState = {
  users: {
    status: 'succeeded',
    users: mockUsers,
    error: '',
  },
};

// Meta configuration
export default {
  component: HomePage,
  title: 'Pages/HomePage',
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

// Default Story
export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://api.github.com/users', () => {
          return HttpResponse.json(MockedState.users.users);
        }),
      ],
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByText('Loading users...'));
    // Waits for the user list to be updated
    await waitFor(async () => {
      // Simulates typing in the search bar
      await fireEvent.change(canvas.getByPlaceholderText('Search GitHub user...'), { target: { value: 'octocat' } });
      // Simulates pressing Enter key to trigger search
      await fireEvent.keyDown(canvas.getByPlaceholderText('Search GitHub user...'), { key: 'Enter', code: 'Enter' });
      // Verify that the user list is filtered
      await waitFor(async () => {
        await expect(canvas.getByText('octocat')).toBeInTheDocument();
        await expect(canvas.queryByText('torvalds')).not.toBeInTheDocument();
      });
    });
  },
};

// Error Story
export const Error = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://api.github.com/users', () => {
          return new HttpResponse(null, { status: 403 });
        }),
      ],
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByText('Loading users...'));
    // Verify that the error message is displayed
    await waitFor(async () => {
      await expect(canvas.getByText('Error: Failed to fetch users')).toBeInTheDocument();
    });
  },
};
