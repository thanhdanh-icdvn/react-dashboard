import clsx from 'clsx';
import satisfactionRateCardStyles from './SatisfactionRateCard.module.scss';
import SatisfactionChartPie from './SatisfactionChartPie';
import { calculatePercentagesByIndex } from '@/utils/number';

type SatisfactionRateCardProps = {
  dataValue?: number[];
};

export default function SatisfactionRateCard({
  dataValue = [800, 50],
}: SatisfactionRateCardProps) {
  const percent = calculatePercentagesByIndex(dataValue, 0);
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
      <div className={clsx(satisfactionRateCardStyles.chart)}>
        <SatisfactionChartPie chartData={dataValue} />
      </div>
      <div className={clsx(satisfactionRateCardStyles.processInfo)}>
        <span className={clsx(satisfactionRateCardStyles.min)}>0%</span>
        <figure className={clsx(satisfactionRateCardStyles.current)}>
          <span className={clsx(satisfactionRateCardStyles.currentValue)}>
            {percent}%
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
