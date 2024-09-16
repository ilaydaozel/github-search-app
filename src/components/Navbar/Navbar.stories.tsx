import Navbar from './Navbar';

/**
 * Storybook configuration for the Navbar component.
 * 
 * This configuration defines the `Navbar` component for Storybook and provides
 * different stories to showcase the component in various states.
 */
export default {
  component: Navbar,
  title: 'Components/Navbar',
  tags: ['autodocs'],
  args: {},  // Default arguments passed to the Navbar component.
};

/**
 * Default story for the Navbar component.
 * 
 * This story represents the default state of the Navbar component.
 * 
 */
export const Default = {
  args: {},  // Arguments for the default story. No additional args are provided here.
};
