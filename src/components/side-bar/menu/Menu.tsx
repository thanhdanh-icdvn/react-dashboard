import clsx from 'clsx';
import { motion } from 'framer-motion';

import MenuItem, { MenuItemProps } from '../menu-item/MenuItem';
import menuStyles from './Menu.module.scss';

export type MenuProps = {
  menuData: MenuItemProps[];
};
export default function Menu({ menuData }: MenuProps) {
  return (
    <motion.nav className={clsx(menuStyles.sideBar)} layout>
      <ul className={clsx(menuStyles.menuList)}>
        {menuData.map((menuItem) => (
          <li key={menuItem.title}>
            <MenuItem {...menuItem} />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
