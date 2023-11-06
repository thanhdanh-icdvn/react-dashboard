import clsx from 'clsx';
import saleCardStyles from './SaleCard.module.scss';
import SaleLineChart from './SaleLineChart';

export default function SaleCard() {
  return (
    <div className={clsx(saleCardStyles.sale)}>
      <figure>
        <h3 className={clsx(saleCardStyles.title)}>Sale Overview</h3>
        <figcaption className={clsx(saleCardStyles.subTitle)}>
          <span className={clsx(saleCardStyles.txtGreen)}>(+5) more</span> in
          2023
        </figcaption>
      </figure>
      <SaleLineChart />
    </div>
  );
}
