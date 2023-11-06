import clsx from 'clsx';
import ReportCard from './ReportCard';

import reportCardListStyles from './ReportCardList.module.scss';
import { IconCart, IconDocument, IconEarth, IconWallet } from '../../icons';

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
        label="Today's Users"
        icon={<IconEarth />}
      />
      <ReportCard
        amount={53000}
        growthPercent={55}
        label="Today's Money"
        icon={<IconDocument />}
      />
      <ReportCard
        amount={53000}
        growthPercent={55}
        label="Today's Money"
        icon={<IconCart />}
      />
    </div>
  );
}
