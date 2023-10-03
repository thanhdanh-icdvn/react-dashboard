import IconWallet from "../icons/IconWallet";
import DashBoardWraper from "./DashBoardWraper";
import ReportCard from "./card/ReportCard";

export default function MainDashboard() {
  return (
    <DashBoardWraper>
      <div>Pages/Dashboard</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: "24px",
          rowGap: "16px",
        }}
      >
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
    </DashBoardWraper>
  );
}
