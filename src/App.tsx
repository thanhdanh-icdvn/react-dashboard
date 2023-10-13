import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/sign-in';
import Tables from './pages/tables';
import Billings from './pages/billings';
import Settings from './pages/settings';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';
import SignUp from './pages/sign-up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="tables" element={<Tables />} />
          <Route path="billings" element={<Billings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
