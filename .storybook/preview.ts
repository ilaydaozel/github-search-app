import type { Preview } from "@storybook/react";
import '../src/index.css';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

// Define your decorators and parameters
const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({ 
      location: {
      pathParams: { username: 'mojombo' },
    },
    routing: { path: '/users/:username' }, }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
