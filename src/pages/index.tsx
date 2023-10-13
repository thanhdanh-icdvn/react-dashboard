import DashBoardWraper from '@/components/main-dashboard/DashBoardWraper';
import SideBar from '@/components/side-bar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <main className="main">
      <SideBar />
      <DashBoardWraper>
        <Outlet />
      </DashBoardWraper>
    </main>
  );
}
