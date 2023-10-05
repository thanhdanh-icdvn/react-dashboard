import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import {
  IconArrowRight,
  IconBilling,
  IconHome,
  IconSettings,
  IconSignIn,
  IconSignUp,
  IconTable,
  IconUser,
  IconWallet,
} from '../../icons';
import MenuItem from './MenuItem';

const icons = {
  IconArrowRight,
  IconBilling,
  IconHome,
  IconSettings,
  IconSignIn,
  IconSignUp,
  IconTable,
  IconUser,
  IconWallet,
};
const meta = {
  title: 'Components/MenuItem/',
  component: MenuItem,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Navigation link',
    },
    icon: {
      options: Object.keys(icons),
      mapping: Object.entries(icons),
      control: {
        type: 'select',
        options: Object.keys(icons),
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
