import clsx from "clsx";
import dashboardWrapperStyles from "./DashBoardWraper.module.scss";
export type DashboardWrapperProps = {
  children?: React.ReactNode;
};
export default function DashBoardWraper({ children }: DashboardWrapperProps) {
  return (
    <div className={clsx(dashboardWrapperStyles.mainDashBoard)}>{children}</div>
  );
}
