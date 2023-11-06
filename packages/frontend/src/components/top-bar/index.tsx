import clsx from 'clsx';
import topBarStyles from './topBar.module.scss';
import { Link } from 'react-router-dom';
import { IconBell, IconGear, IconSearch, IconUser } from '../icons';
export default function TopBar() {
  return (
    <div className={clsx(topBarStyles.topBar)}>
      <ul className={clsx(topBarStyles.breadcrumbs)}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <span>Dashboard</span>
        </li>
      </ul>
      <div className={clsx(topBarStyles.searchArea)}>
        <div className={clsx(topBarStyles.searchContainer)}>
          <IconSearch />
          <input
            className={clsx(topBarStyles.searchInput)}
            placeholder="Search anything here"
          ></input>
        </div>
        <Link className={clsx(topBarStyles.link)} to="/sign-in">
          <IconUser />
          Sign In
        </Link>
        <Link className={clsx(topBarStyles.link)} to="/settings">
          <IconGear />
        </Link>
        <Link className={clsx(topBarStyles.link)} to="/notifications">
          <IconBell />
        </Link>
      </div>
    </div>
  );
}
