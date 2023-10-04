import DashBoardWraper from './DashBoardWraper';
import ReportCardList from './card/ReportCardList';
import WelcomeCard from './card/WelcomeCard';

export default function MainDashboard() {
  return (
    <DashBoardWraper>
      <div>
        <p>Pages/Dashboard</p>
      </div>
      <ReportCardList />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '24px',
          columnGap: '24px',
        }}
      >
        <WelcomeCard />
      </div>
    </DashBoardWraper>
  );
}
