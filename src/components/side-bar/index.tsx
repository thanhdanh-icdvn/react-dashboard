import {
  IconBilling,
  IconHome,
  IconSettings,
  IconSignIn,
  IconTable,
  IconUser,
} from '../icons';
import IconSiginUp from '../icons/IconSignUp';
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
    icon: <IconSiginUp width={16} height={16} />,
    href: '/sigin-up',
  },
];

export default function SideBar() {
  return (
    <aside>
      <Menu menuData={menus} />
    </aside>
  );
}
