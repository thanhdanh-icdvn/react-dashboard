import clsx from "clsx";
import IconBilling from "../../icons/IconBilling";
import IconHome from "../../icons/IconHome";
import IconSettings from "../../icons/IconSettings";
import IconSiginUp from "../../icons/IconSiginUp";
import IconSignIn from "../../icons/IconSignIn";
import IconTable from "../../icons/IconTable";
import IconUser from "../../icons/IconUser";
import MenuItem, { MenuItemProps } from "../menu-item/MenuItem";

import menuStyles from "./Menu.module.scss";

const menus: MenuItemProps[] = [
  {
    title: "Dashboard",
    icon: <IconHome width={16} height={16} />,
    href: "/",
  },
  {
    title: "Tables",
    icon: <IconTable width={16} height={16} />,
    href: "/tables",
  },
  {
    title: "Billings",
    icon: <IconBilling width={16} height={16} />,
    href: "/billings",
  },
  {
    title: "Settings",
    icon: <IconSettings width={16} height={16} />,
    href: "/settings",
  },
  {
    title: "Profile",
    icon: <IconUser width={16} height={16} />,
    href: "/profile",
  },
  {
    title: "Sign In",
    icon: <IconSignIn width={16} height={16} />,
    href: "/sign-in",
  },
  {
    title: "Sign Up",
    icon: <IconSiginUp width={16} height={16} />,
    href: "/sigin-up",
  },
];

export default function Menu() {
  return (
    <nav className={clsx(menuStyles.sideBar)}>
      <ul className={clsx(menuStyles.menuList)}>
        {menus.map((menuItem) => (
          <li key={menuItem.title}>
            <MenuItem {...menuItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
