import clsx from 'clsx';
import { Link } from 'react-router-dom';
import welcomCardStyles from './WelcomeCard.module.scss';
import IconArrowRight from '../../icons/IconArrowRight';

export default function WelcomeCard() {
  return (
    <div className={clsx(welcomCardStyles.welcomeCard)}>
      <div className={welcomCardStyles.contentTop}>
        <h2>
          <span className={welcomCardStyles.textLight}>Welcome back, </span>Mark
          Johnson
        </h2>
        <p className={welcomCardStyles.textLight}>
          Glad see you again!
          <br />
          Ask me anything
        </p>
      </div>
      <div className={welcomCardStyles.contentBottom}>
        <Link to="/" className={welcomCardStyles.recordLink}>
          Tap to record
          <span>
            <IconArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
