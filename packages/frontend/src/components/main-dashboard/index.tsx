import GridSecond from './card/GridSecond';
import GridThird from './card/GridThird';
import ReportCardList from './card/ReportCardList';

export default function MainDashboard() {
  return (
    <>
      <ReportCardList />
      <GridSecond />
      <GridThird />
    </>
  );
}
