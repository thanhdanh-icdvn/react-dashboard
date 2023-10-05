import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import MenuItem from './MenuItem';
import IconHome from '../../icons/IconHome';
import IconTable from '../../icons/IconTable';
import IconWallet from '../../icons/IconWallet';
import IconBilling from '../../icons/IconBilling';
import IconSettings from '../../icons/IconSettings';
import IconSignIn from '../../icons/IconSignIn';
import IconSignUp from '../../icons/IconSignUp';
import IconUser from '../../icons/IconUser';

const icons = {
  IconHome,
  IconTable,
  IconWallet,
  IconBilling,
  IconSettings,
  IconSignIn,
  IconSignUp,
  IconUser,
};

const meta = {
  title: 'Components/MenuItem',
  component: MenuItem,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    href: {
      control: 'text',
      description: 'Navigation link',
    },
    icon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons,
      control: {
        type: 'select',
        options: Object.keys(icons),
        labels: {
          ...Object.keys(icons),
        },
      },
      description: 'Icon',
    },
    title: {
      control: 'text',
      description: 'Title of link',
    },
    active: {
      control: 'boolean',
      description: 'Set is active',
    },
  },
  args: {
    href: '/',
    icon: <IconHome />,
    title: 'Dashboard',
    active: false,
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
    icon: <IconHome />,
    title: 'Default',
    active: false,
  },
};
