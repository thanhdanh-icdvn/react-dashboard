import clsx from 'clsx';
import referalTrackingCardStyles from './ReferalTrackingCard.module.scss';
import ReferalChartDoughnut from './ReferalChartDoughnut';

export default function ReferalTrackingCard() {
  return (
    <div className={clsx(referalTrackingCardStyles.referalTracking)}>
      <div className={clsx(referalTrackingCardStyles.title)}>
        <h3>Referal Tracking</h3>
        <button className={clsx(referalTrackingCardStyles.moreButton)}>
          ...
        </button>
      </div>
      <div className={clsx(referalTrackingCardStyles.content)}>
        <div className={clsx(referalTrackingCardStyles.infor)}>
          <div className={clsx(referalTrackingCardStyles.childCard)}>
            <div className={clsx(referalTrackingCardStyles.childCardTitle)}>
              Invited
            </div>
            <div className={clsx(referalTrackingCardStyles.childCardDetail)}>
              145 people
            </div>
          </div>
          <div className={clsx(referalTrackingCardStyles.childCard)}>
            <div className={clsx(referalTrackingCardStyles.childCardTitle)}>
              Bonus
            </div>
            <div className={clsx(referalTrackingCardStyles.childCardDetail)}>
              {new Intl.NumberFormat('vi-VN').format(1465)}
            </div>
          </div>
        </div>
        <div className={clsx(referalTrackingCardStyles.graph)}>
          <ReferalChartDoughnut chartData={[93, 7]} />
        </div>
      </div>
    </div>
  );
}
