import clsx from 'clsx';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuItemStyles from './MenuItem.module.scss';

export type MenuItemProps = {
  icon: ReactNode;
  title: string;
  href: string;
};
export default function MenuItem({ icon, title, href = '#' }: MenuItemProps) {
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;
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
