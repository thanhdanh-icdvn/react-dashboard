import clsx from 'clsx';
import gridThirdStyles from './GridThird.module.scss';
import SaleCard from './SaleCard';
export default function GridThird() {
  return (
    <div className={clsx(gridThirdStyles.gridThird)}>
      <SaleCard />
      <SaleCard />
    </div>
  );
}
