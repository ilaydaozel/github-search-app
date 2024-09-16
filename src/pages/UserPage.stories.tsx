import UserPage from './UserPage';
import { Provider } from 'react-redux';
import { within, fireEvent, waitFor } from '@storybook/test';
import { expect } from '@storybook/jest';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GithubRepository, RepositoriesState } from '../types';

/**
 * Mock data representing GitHub repositories for testing.
 */
const mockRepositories: GithubRepository[] = [
  {
    id: 1,
    name: 'asteroids',
    private: false,
    language: 'JavaScript',
    owner: {
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      html_url: 'https://github.com/octocat',
      id: 0,
      repos_url: ''
    },
    description: '',
    html_url: ''
  },
  {
    id: 2,
    name: 'docz-website',
    private: true,
    language: 'TypeScript',
    owner: {
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      html_url: 'https://github.com/octocat',
      id: 0,
      repos_url: ''
    },
    description: '',
    html_url: ''
  },
];

/**
 * Mocked state for successful fetch of repositories.
 * 
 */
const MockedState: RepositoriesState = {
  status: 'succeeded',
  repos: mockRepositories,
  error: '',
  filterType: 'all',
  filterLanguage: 'all',
};

/**
 * A super-simple mock of a Redux store for testing purposes.
 */
const Mockstore = ({ repositoriesState, children }: { repositoriesState: RepositoriesState, children: any }) => (
  <Provider
    store={configureStore({
      reducer: {
        repositories: createSlice({
          name: 'repositories',
          initialState: repositoriesState,
          reducers: {
            setFilterType(state, action: PayloadAction<'all' | 'public' | 'private'>) {
              state.filterType = action.payload;
            },
            setFilterLanguage(state, action: PayloadAction<string>) {
              state.filterLanguage = action.payload;
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

// Meta configuration for Storybook
export default {
  component: UserPage,
  title: 'Pages/UserPage',
  decorators: [(story: any) => <div>{story()}</div>],
  excludeStories: /.*MockedState$/,
  tags: ['autodocs'],
};

/**
 * Default story for the `UserPage` component.
 */
export const Default = {
  decorators: [
    (story: any) => (
      <Mockstore repositoriesState={MockedState}>
        {story()}
      </Mockstore>
    ),
  ],
  /**
   * Play function to interact with the story and assert outcomes.
   */
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Simulate a search
    await fireEvent.change(canvas.getByPlaceholderText('Search repositories...'), { target: { value: 'asteroids' } });

    // Wait for the repository to appear
    await waitFor(async () => {
      await expect(canvas.getByText('asteroids')).toBeInTheDocument();
      await expect(canvas.queryByText('docz-website')).not.toBeInTheDocument();
    });

    // Interact with the type filter
    const typeFilter = canvas.getByTestId('repo-type-filter');
    fireEvent.change(typeFilter, { target: { value: 'public' } });

    // Verify 'asteroids' remains as it is a public repo
    await waitFor(() => {
      expect(canvas.getByText('asteroids')).toBeInTheDocument();
      expect(canvas.queryByText('docz-website')).not.toBeInTheDocument(); // docz-website is private
    });

    // Interact with the language filter
    const languageFilter = canvas.getByTestId('repo-language-filter');
    fireEvent.change(languageFilter, { target: { value: 'TypeScript' } });

    // Verify no repositories found after changing language to TypeScript (asteroids is JavaScript)
    await waitFor(() => {
      expect(canvas.queryByText('asteroids')).not.toBeInTheDocument();
      expect(canvas.getByText('No repositories found.')).toBeInTheDocument();
    });
  },
};

/**
 * Error story for the `UserPage` component, simulating a fetch failure.
 */
export const Error = {
  decorators: [
    (story: any) => (
      <Mockstore
        repositoriesState={{
          ...MockedState,
          repos: [],
          status: 'failed',
          error: 'Failed to fetch repositories',
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
  /**
   * Play function to interact with the story and assert error outcome.
   */
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getByText('Error: Failed to fetch repositories')).toBeInTheDocument();
    });
  },
};

/**
 * Loading story for the `UserPage` component, simulating a loading state.
 */
export const Loading = {
  decorators: [
    (story: any) => (
      <Mockstore
        repositoriesState={{
          ...MockedState,
          repos: [],
          status: 'loading',
          error: '',
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
  /**
   * Play function to interact with the story and assert loading state.
   * 
   */
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Verify that the loading message is displayed
    await waitFor(() => {
      expect(canvas.getByTestId('loading')).toBeInTheDocument();
    });

    // Ensure the loading message persists (since we're simulating a loading state)
    await waitFor(() => {
      expect(canvas.getByText('Loading...')).toBeInTheDocument();
    });
  },
};

/**
 * Empty story for the `UserPage` component, simulating no repositories found.
 */
export const Empty = {
  decorators: [
    (story: any) => (
      <Mockstore
        repositoriesState={{
          ...MockedState,
          repos: [],
          status: 'succeeded',
          error: '',
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
  /**
   * Play function to interact with the story and assert 'no repositories found' message.
   * 
   */
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Ensure the initial state shows no repositories
    await waitFor(() => expect(canvas.getByText('No repositories found.')).toBeInTheDocument());

    // Simulate a search term input
    const searchInput = canvas.getByPlaceholderText('Search repositories...');
    await fireEvent.change(searchInput, { target: { value: 'react' } });

    // Wait and verify the 'No repositories found' message still appears
    await waitFor(() => expect(canvas.getByText('No repositories found.')).toBeInTheDocument());
  },
};
