import clsx from 'clsx';
import saleCardStyles from './SaleCard.module.scss';
import SaleLineChart from './SaleLineChart';

export default function SaleCard() {
  return (
    <div className={clsx(saleCardStyles.sale)}>
      <SaleLineChart />
    </div>
  );
}
