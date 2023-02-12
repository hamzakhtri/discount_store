import './App.css';
import Welcome from './screens/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './screens/Signup';
import Login from './screens/Login';
import UserHome from './screens/UserHome';
import AdminPortal from './screens/AdminPortal';
import AddItem from './screens/AddItem';
import Order from './screens/Order';
import Setting from './screens/Setting';
import Cart from './screens/Cart';
import UserSetting from './screens/UserSetting';




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
          <Route path="/additem" element={<AddItem />} />
          <Route path="/order" element={<Order />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/usersetting" element={<UserSetting />} />
          <Route path="/shop" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
