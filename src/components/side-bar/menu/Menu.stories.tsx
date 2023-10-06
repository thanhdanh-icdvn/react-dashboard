import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Menu from './Menu';
import { MenuItemProps } from '../menu-item/MenuItem';
import {
  IconBilling,
  IconHome,
  IconSettings,
  IconSignIn,
  IconTable,
  IconUser,
} from '../../icons';
import IconSiginUp from '../../icons/IconSignUp';
const menus: MenuItemProps[] = [
  {
    title: 'Dashboard',
    icon: <IconHome width={16} height={16} />,
    href: '/',
  },
  {
    title: 'Tables',
    icon: <IconTable width={16} height={16} />,
    href: '/tables',
  },
  {
    title: 'Billings',
    icon: <IconBilling width={16} height={16} />,
    href: '/billings',
  },
  {
    title: 'Settings',
    icon: <IconSettings width={16} height={16} />,
    href: '/settings',
  },
  {
    title: 'Profile',
    icon: <IconUser width={16} height={16} />,
    href: '/profile',
  },
  {
    title: 'Sign In',
    icon: <IconSignIn width={16} height={16} />,
    href: '/sign-in',
  },
  {
    title: 'Sign Up',
    icon: <IconSiginUp width={16} height={16} />,
    href: '/sigin-up',
  },
];
const meta = {
  title: 'Components/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    menuData: {
      name: 'menuData',
      description: 'Menu data',
    },
  },
  args: {
    menuData: menus,
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuData: menus,
  },
};
