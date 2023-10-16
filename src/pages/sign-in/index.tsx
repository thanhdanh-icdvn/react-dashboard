import clsx from 'clsx';
import signInStyles from './SignIn.module.scss';
import { useState } from 'react';
import Button from '@/components/buttons';
import { Link, NavLink } from 'react-router-dom';

export default function SignIn() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleToggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className={clsx(signInStyles.signIn)}>
      <nav className={clsx(signInStyles.nav)}>
        <h1 className={clsx(signInStyles.logo)}>
          <NavLink to={'/'}>VISION UI FREE</NavLink>
        </h1>
        <ul className={clsx(signInStyles.menuList)}>
          <li className={clsx(signInStyles.menuItem)}>
            <NavLink to={'/'}>Dashboard</NavLink>
          </li>
          <li className={clsx(signInStyles.menuItem)}>
            <NavLink to={'/profile'}>Profile</NavLink>
          </li>
          <li className={clsx(signInStyles.menuItem)}>
            <NavLink to={'/sign-up'}>Sign up</NavLink>
          </li>
          <li className={clsx(signInStyles.menuItem)}>
            <NavLink to={'/sign-in'}>Sign in</NavLink>
          </li>
        </ul>
        <Button size="sm">Free Download</Button>
      </nav>
      <div className={clsx(signInStyles.content)}>
        <div className={clsx(signInStyles.bg)}>
          <p>INSPIRED BY THE FUTURE</p>
          <h3>THE VISION UI DASHBOARD</h3>
        </div>
        <div className={clsx(signInStyles.formWrap)}>
          <div className={clsx(signInStyles.welcomeBlock)}>
            <h3 className={clsx(signInStyles.welcomeText)}>Nice to see you!</h3>
            <p className={clsx(signInStyles.welcomeTextCaption)}>
              Enter your email and password to sign in
            </p>
          </div>

          <form className={clsx(signInStyles.form)}>
            <div className={clsx(signInStyles.formInput)}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
            </div>
            <div className={clsx(signInStyles.formInput)}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Your email address"
              />
            </div>
            <div className={clsx(signInStyles.label)}>
              <label className={clsx(signInStyles.switch)}>
                <input
                  type="checkbox"
                  onChange={handleToggleSwitch}
                  className={clsx({
                    checked: isChecked,
                  })}
                  checked={isChecked}
                />
                <span
                  className={clsx(signInStyles.slider, signInStyles.rounded)}
                />
              </label>
              Remember me
            </div>
            <Button full>SIGN IN</Button>
            <p className={clsx(signInStyles.linkBlock)}>
              Don&apos;t have an account?{' '}
              <Link to={'/sign-up'} className={clsx(signInStyles.link)}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
