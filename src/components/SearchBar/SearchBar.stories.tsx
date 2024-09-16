import { fn } from "@storybook/test";
import SearchBar from './SearchBar';

/**
 * Storybook configuration for the SearchBar component.
 * 
 * This configuration sets up the SearchBar component to be used in Storybook,
 * including its component definition, title, tags, and default arguments.
 */
export default {
  component: SearchBar,
  title: 'Components/SearchBar', // The title under which the component will be listed in Storybook.
  tags: ['autodocs'], // Tags for the Storybook documentation.
  args: {
    onSearch: fn, // Mock function for the onSearch callback.
  },
};

/**
 * Default story for the SearchBar component.
 * 
 * This story renders the SearchBar component with default arguments.
 */
export const Default = {
  args: {}, // Arguments to pass to the component (currently empty).
};

/**
 * Story for the SearchBar component with a custom placeholder.
 * 
 * This story demonstrates the SearchBar component with a custom placeholder text.
 */
export const WithCustomPlaceHolder = {
  args: {
    placeholder: 'Search GitHub repositories...', // Custom placeholder text.
  },
};
