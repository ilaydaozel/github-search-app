
/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import {
    configureStore,
    createSlice,
   createAsyncThunk,
   PayloadAction,
  } from '@reduxjs/toolkit';
import { GithubUser, UsersState } from '../types';

  
  /*
   * The initial state of our store when the app loads.
   * Usually, you would fetch this from a server. Let's not worry about that now
   */
  
  const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
  };

  /*
   * Creates an asyncThunk to fetch users from a the github endpoint.
   */
  export const fetchGithubUsers = createAsyncThunk<GithubUser[]>(
    'users/fetchGithubUsers',
    async () => {
      const response = await fetch('https://api.github.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    }
  );

    
  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      // Define any synchronous actions if needed
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchGithubUsers.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchGithubUsers.fulfilled, (state, action: PayloadAction<GithubUser[]>) => {
          state.status = 'succeeded';
          state.users = action.payload;
        })
        .addCase(fetchGithubUsers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Something went wrong';
        });
    },
  });

  
  /*
   * Our app's store configuration goes here.
   * Read more about Redux's configureStore in the docs:
   * https://redux-toolkit.js.org/api/configureStore
   */
  const store = configureStore({
    reducer: {
      users: usersSlice.reducer,
    },
  });
  
  export default store;
  