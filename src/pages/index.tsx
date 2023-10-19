import DashBoardWraper from '@/components/main-dashboard/DashBoardWraper';
import SideBar from '@/components/side-bar';
import TopBar from '@/components/top-bar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <main className="main">
      <SideBar />
      <DashBoardWraper>
        <TopBar />
        <div
          style={{
            marginTop: '90px',
          }}
        >
          <Outlet />
        </div>
      </DashBoardWraper>
    </main>
  );
}
