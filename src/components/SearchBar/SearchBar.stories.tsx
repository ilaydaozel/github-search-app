import { fn } from "@storybook/test";

import SearchBar from './SearchBar';


export default {
  component: SearchBar,
  title: 'Components/SearchBar',
  tags: ['autodocs'],
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