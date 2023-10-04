import clsx from 'clsx';
import ReportCard from './ReportCard';
import IconWallet from '../../icons/IconWallet';

import reportCardListStyles from './ReportCardList.module.scss';

export default function ReportCardList() {
  return (
    <div className={clsx(reportCardListStyles.reportCardList)}>
      <ReportCard
        amount={53000}
        growthPercent={55}
        label="Today's Money"
        icon={<IconWallet />}
      />
      <ReportCard
        amount={53000}
        growthPercent={55}
        label="Today's Money"
        icon={<IconWallet />}
      />
      <ReportCard
        amount={53000}
        growthPercent={55}
        label="Today's Money"
        icon={<IconWallet />}
      />
      <ReportCard
        amount={53000}
        growthPercent={55}
        label="Today's Money"
        icon={<IconWallet />}
      />
    </div>
  );
}
