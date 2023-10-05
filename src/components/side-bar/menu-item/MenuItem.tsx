import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import menuItemStyles from './MenuItem.module.scss';
import { ReactNode } from 'react';

export type MenuItemProps = {
  icon: ReactNode;
  title: string;
  href: string;
  active?: boolean;
};
export default function MenuItem({ icon, title, href, active }: MenuItemProps) {
  const location = useLocation();

  const isActive = (path: string): boolean =>
    location.pathname === path || Boolean(active);
  return (
    <Link
      className={clsx(menuItemStyles.menuLink, {
        [menuItemStyles.active]: isActive(href),
      })}
      to={href}
    >
      {icon}
      <span className={menuItemStyles.title}>{title}</span>
    </Link>
  );
}
