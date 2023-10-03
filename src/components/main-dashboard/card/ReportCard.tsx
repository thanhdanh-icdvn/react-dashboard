import clsx from "clsx";
import reportCardStyles from "./ReportCard.module.scss";

export type ReportCardProps = {
  label: string;
  amount: number;
  growthPercent: number;
  icon: React.ReactNode;
};
export default function ReportCard({
  label,
  amount,
  growthPercent,
  icon,
}: ReportCardProps) {
  return (
    <div className={clsx(reportCardStyles.reportCard)}>
      <div className={clsx(reportCardStyles.content)}>
        <div>{label}</div>
        <div className={reportCardStyles.amount}>
          {amount}
          <span className={reportCardStyles.growthPercent}>
            {growthPercent}%
          </span>
        </div>
      </div>
      <div className={clsx(reportCardStyles.icon)}>{icon}</div>
    </div>
  );
}
