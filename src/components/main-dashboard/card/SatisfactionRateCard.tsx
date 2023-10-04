import clsx from 'clsx';
import satisfactionRateCardStyles from './SatisfactionRateCard.module.scss';
import SatisfactionChartPie from './SatisfactionChartPie';

export default function SatisfactionRateCard() {
  return (
    <div className={clsx(satisfactionRateCardStyles.satisfactionRate)}>
      <div className={clsx(satisfactionRateCardStyles.summary)}>
        <h3 className={clsx(satisfactionRateCardStyles.title)}>
          Satisfaction Rate
        </h3>
        <p className={clsx(satisfactionRateCardStyles.subTitle)}>
          From all projects
        </p>
      </div>
      <SatisfactionChartPie />
      <div className={clsx(satisfactionRateCardStyles.processInfo)}>
        <span className={clsx(satisfactionRateCardStyles.min)}>0%</span>
        <figure className={clsx(satisfactionRateCardStyles.current)}>
          <span className={clsx(satisfactionRateCardStyles.currentValue)}>
            95%
          </span>
          <figcaption
            className={clsx(satisfactionRateCardStyles.currentCaption)}
          >
            Based on likes
          </figcaption>
        </figure>
        <span className={clsx(satisfactionRateCardStyles.max)}>100%</span>
      </div>
    </div>
  );
}
