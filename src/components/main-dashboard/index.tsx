import DashBoardWraper from './DashBoardWraper';
import GridSecond from './card/GridSecond';
import ReportCardList from './card/ReportCardList';
import SaleCard from './card/SaleCard';

export default function MainDashboard() {
  return (
    <DashBoardWraper>
      <div>
        <p>Pages/Dashboard</p>
      </div>
      <ReportCardList />
      <GridSecond />
      <SaleCard />
    </DashBoardWraper>
  );
}
