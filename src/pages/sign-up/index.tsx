import clsx from 'clsx';
import signUpStyles from './SignUp.module.scss';
import { useState } from 'react';
import Button from '@/components/buttons';
import { Link, NavLink } from 'react-router-dom';

export default function SignUp() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleToggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className={clsx(signUpStyles.signIn)}>
      <nav className={clsx(signUpStyles.nav)}>
        <h1 className={clsx(signUpStyles.logo)}>
          <NavLink to={'/'}>VISION UI FREE</NavLink>
        </h1>
        <ul className={clsx(signUpStyles.menuList)}>
          <li className={clsx(signUpStyles.menuItem)}>
            <NavLink to={'/'}>Dashboard</NavLink>
          </li>
          <li className={clsx(signUpStyles.menuItem)}>
            <NavLink to={'/profile'}>Profile</NavLink>
          </li>
          <li className={clsx(signUpStyles.menuItem)}>
            <NavLink to={'/sign-up'}>SignUp</NavLink>
          </li>
          <li className={clsx(signUpStyles.menuItem)}>
            <NavLink to={'/sign-in'}>Sign In</NavLink>
          </li>
        </ul>
        <Button size="sm">Free Download</Button>
      </nav>
      <div className={clsx(signUpStyles.content)}>
        <div className={clsx(signUpStyles.bg)}>
          <p>INSPIRED BY THE FUTURE:</p>
          <h3>THE VISION UI DASHBOARD</h3>
        </div>
        <div className={clsx(signUpStyles.formWrap)}>
          <h3 className={clsx(signUpStyles.welcomeText)}>Nice to see you!</h3>
          <p className={clsx(signUpStyles.welcomeTextCaption)}>
            Enter your email and password to sign in
          </p>

          <form className={clsx(signUpStyles.form)}>
            <div className={clsx(signUpStyles.formInput)}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
            </div>
            <div className={clsx(signUpStyles.formInput)}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Your email address"
              />
            </div>
            <label className={clsx(signUpStyles.switch)}>
              <input
                type="checkbox"
                onChange={handleToggleSwitch}
                className={clsx({
                  checked: isChecked,
                })}
                checked={isChecked}
              />
              <span
                className={clsx(signUpStyles.slider, signUpStyles.rounded)}
              />
            </label>
            <Button full>SIGN IN</Button>
            <p className={clsx(signUpStyles.link)}>
              Don&apos;t have an account?{' '}
              <Link to={'/sign-up'} className={clsx(signUpStyles.linkToSignUp)}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
