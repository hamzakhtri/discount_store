import './App.css';
import Welcome from './screens/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './screens/Signup';
import Login from './screens/Login';
import UserHome from './screens/UserHome';
import AdminPortal from './screens/AdminPortal';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
