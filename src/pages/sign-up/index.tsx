import clsx from 'clsx';
import signUpStyles from '../sign-in/SignIn.module.scss';
import { useState } from 'react';
import Button from '@/components/buttons';
import { Link, NavLink } from 'react-router-dom';
import {
  IconLogoApple,
  IconLogoFacebook,
  IconLogoTwitter,
} from '@/components/icons';
import IconLogoGoogle from '@/components/icons/IconLogoGoogle';

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
            <NavLink to={'/sign-up'}>Sign up</NavLink>
          </li>
          <li className={clsx(signUpStyles.menuItem)}>
            <NavLink to={'/sign-in'}>Sign in</NavLink>
          </li>
        </ul>
        <Button size="sm">Free Download</Button>
      </nav>
      <div className={clsx(signUpStyles.content)}>
        <div className={clsx(signUpStyles.bg)}>
          <p>INSPIRED BY THE FUTURE</p>
          <h3>THE VISION UI DASHBOARD</h3>
        </div>
        <div className={clsx(signUpStyles.formWrap)}>
          <div className={clsx(signUpStyles.welcomeBlock)}>
            <h3 className={clsx(signUpStyles.welcomeText)}>Welcome!</h3>
            <p
              className={clsx(
                signUpStyles.welcomeTextCaption,
                signUpStyles.textCenter,
              )}
            >
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>

          <form className={clsx(signUpStyles.form)}>
            <h4>Register with</h4>
            <ul className={clsx(signUpStyles.socialList)}>
              <li>
                <Link to={'/'}>
                  <IconLogoFacebook />
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <IconLogoApple />
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <IconLogoGoogle />
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <IconLogoTwitter />
                </Link>
              </li>
            </ul>

            <p>or</p>

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
            <div className={clsx(signUpStyles.label)}>
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
              Remember
            </div>
            <Button
              full
              onClick={(e) => {
                e.preventDefault();
                console.log('sign up');
              }}
            >
              SIGN UP
            </Button>
            <p className={clsx(signUpStyles.linkBlock)}>
              Already have an account?{' '}
              <Link to={'/sign-in'} className={clsx(signUpStyles.link)}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
