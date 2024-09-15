import { fn } from "@storybook/test";

import SearchBar from './SearchBar';


export default {
  component: SearchBar,
  title: 'SearchBar',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    onSearch: fn,
  },
};

export const Default = {
  args: {},
};

export const WithCustomPlaceHolder = {
  args: {
    placeholder: 'Search GitHub repositories...',
  },
};