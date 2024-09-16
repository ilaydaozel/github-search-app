import Footer from './Footer';

/**
 * Storybook configuration for the Footer component.
 * 
 * This configuration sets up the Footer component to be used in Storybook,
 * including its component definition, title, tags, and default arguments.
 */
export default {
  component: Footer,
  title: 'Components/Footer', // The title under which the component will be listed in Storybook.
  tags: ['autodocs'], // Tags for the Storybook documentation.
  args: {}, // Default arguments passed to the component in this story.
};

/**
 * Default story for the Footer component.
 * 
 * This story renders the Footer component with default arguments.
 */
export const Default = {
  args: {}, // Arguments to pass to the component (currently empty).
};
