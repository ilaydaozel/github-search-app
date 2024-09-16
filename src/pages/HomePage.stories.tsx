import HomePage from './HomePage';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { GithubUser, UsersState } from '../types';
import { within, fireEvent, waitFor, waitForElementToBeRemoved } from '@storybook/test';
import { expect } from '@storybook/jest';

// Mock data
const mockUsers: GithubUser[] = [
  { login: 'octocat', avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4', html_url: 'https://github.com/octocat', id: 0, repos_url: '' },
  { login: 'torvalds', avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4', html_url: 'https://github.com/torvalds', id: 0, repos_url: '' },
  { login: 'pjhyett', avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4', html_url: 'https://github.com/pjhyett', id: 3, repos_url: 'https://api.github.com/users/pjhyett/repos' },
  { login: 'wayneeseguin', avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4', html_url: 'https://github.com/wayneeseguin', id: 4, repos_url: 'https://api.github.com/users/wayneeseguin/repos' },
  { login: 'brynary', avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4', html_url: 'https://github.com/brynary', id: 5, repos_url: 'https://api.github.com/users/brynary/repos' },
  { login: 'tenderlove', avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4', html_url: 'https://github.com/tenderlove', id: 6, repos_url: 'https://api.github.com/users/tenderlove/repos' },
  { login: 'steveklabnik', avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4', html_url: 'https://github.com/steveklabnik', id: 7, repos_url: 'https://api.github.com/users/steveklabnik/repos' },
  { login: 'excid3', avatar_url: 'https://avatars.githubusercontent.com/u/8?v=4', html_url: 'https://github.com/excid3', id: 8, repos_url: 'https://api.github.com/users/excid3/repos' },
  { login: 'kensmith', avatar_url: 'https://avatars.githubusercontent.com/u/9?v=4', html_url: 'https://github.com/kensmith', id: 9, repos_url: 'https://api.github.com/users/kensmith/repos' },
  { login: 'johndoe', avatar_url: 'https://avatars.githubusercontent.com/u/10?v=4', html_url: 'https://github.com/johndoe', id: 10, repos_url: 'https://api.github.com/users/johndoe/repos' }
];

// Mock state
const mockState: UsersState = {
  status: 'succeeded',
  users: mockUsers,
  error: null,
};

// Create a mock store
const MockStore = ({ usersState, children }: { usersState: UsersState, children: React.ReactNode }) => (
  <Provider
    store={configureStore({
      reducer: {
        users: createSlice({
          name: 'users',
          initialState: usersState,
          reducers: {},
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

// Meta configuration
export default {
  component: HomePage,
  title: 'Pages/HomePage',
  decorators: [(story: any) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
};

// Default Story
export const Default = {
  decorators: [
    (story: any) => (
      <MockStore usersState={mockState}>
        {story()}
      </MockStore>
    ),
  ],
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    //await waitForElementToBeRemoved(() => canvas.getByText('Loading users...'));
    await waitFor(async () => {
      fireEvent.change(canvas.getByPlaceholderText('Search GitHub user...'), { target: { value: 'octocat' } });
      fireEvent.keyDown(canvas.getByPlaceholderText('Search GitHub user...'), { key: 'Enter', code: 'Enter' });
      await expect(canvas.getByText('octocat')).toBeInTheDocument();
      await expect(canvas.queryByText('torvalds')).not.toBeInTheDocument();
    });
  },
};

// Loading Story
export const Loading = {
  decorators: [
    (story: any) => (
      <MockStore usersState={{ ...mockState, status: 'loading', users: [], error: null }}>
        {story()}
      </MockStore>
    ),
  ],
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('loading')).toBeInTheDocument();
    await expect(canvas.getByText('Loading users...')).toBeInTheDocument();
  },
};

// Error Story
export const Error = {
  decorators: [
    (story: any) => (
      <MockStore usersState={{ status: 'failed', users: [], error: 'Failed to fetch users' }}>
        {story()}
      </MockStore>
    ),
  ],
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    //await waitForElementToBeRemoved(() => canvas.getByText('Loading users...'));
    await waitFor(async () => {
      await expect(canvas.getByText('Error: Failed to fetch users')).toBeInTheDocument();
    });
  },
};

// Empty Story
export const Empty = {
  decorators: [
    (story: any) => (
      <MockStore usersState={{ status: 'succeeded', users: [], error: null }}>
        {story()}
      </MockStore>
    ),
  ],
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getByText('No users found.')).toBeInTheDocument();
    });
    fireEvent.change(canvas.getByPlaceholderText('Search GitHub user...'), { target: { value: 'react' } });
    await waitFor(async () => {
      await expect(canvas.getByText('No users found.')).toBeInTheDocument();
    });
  },
};
