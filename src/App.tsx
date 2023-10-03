import MainDashboard from "./components/main-dashboard";
import SideBar from "./components/side-bar";

import "./App.css";

function App() {
  return (
    <main className="main">
      <SideBar />
      <MainDashboard />
    </main>
  );
}

export default App;
