import DashBoardWraper from './DashBoardWraper';
import GridSecond from './card/GridSecond';
import GridThird from './card/GridThird';
import ReportCardList from './card/ReportCardList';

export default function MainDashboard() {
  return (
    <DashBoardWraper>
      <div>
        <p>Pages/Dashboard</p>
      </div>
      <ReportCardList />
      <GridSecond />
      <GridThird />
    </DashBoardWraper>
  );
}
