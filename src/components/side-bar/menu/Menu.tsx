import clsx from 'clsx';
import MenuItem, { MenuItemProps } from '../menu-item/MenuItem';

import menuStyles from './Menu.module.scss';

export type MenuProps = {
  menuData: MenuItemProps[];
};
export default function Menu({ menuData }: MenuProps) {
  return (
    <nav className={clsx(menuStyles.sideBar)}>
      <ul className={clsx(menuStyles.menuList)}>
        {menuData.map((menuItem) => (
          <li key={menuItem.title}>
            <MenuItem {...menuItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
