import {
  IconBilling,
  IconHome,
  IconSettings,
  IconSignIn,
  IconSignUp,
  IconTable,
  IconUser,
} from '../icons';
import { MenuItemProps } from './menu-item/MenuItem';
import Menu from './menu/Menu';

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
    icon: <IconSignUp width={16} height={16} />,
    href: '/sign-up',
  },
];

export default function SideBar() {
  return (
    <aside>
      <Menu menuData={menus} />
    </aside>
  );
}
