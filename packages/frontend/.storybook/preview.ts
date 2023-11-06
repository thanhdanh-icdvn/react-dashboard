import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#666',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
  loaders: [mswLoader],
};

export default preview;
