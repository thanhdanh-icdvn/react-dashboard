import ReferalTrackingCard from './ReferalTrackingCard';
import SatisfactionRateCard from './SatisfactionRateCard';
import WelcomeCard from './WelcomeCard';

import gridSecondStyles from './GridSecond.module.scss';
import clsx from 'clsx';

export default function GridSecond() {
  return (
    <div className={clsx(gridSecondStyles.gridSecond)}>
      <WelcomeCard />
      <SatisfactionRateCard dataValue={[111, 11]} />
      <ReferalTrackingCard />
    </div>
  );
}
