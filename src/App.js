import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/DashBoard/DashBoard/Dashboard';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders';
import MyReviews from './Pages/DashBoard/MyReviews/MyReviews';
import MyProfile from './Pages/DashBoard/MyProfile/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /> </RequireAuth>}>
          <Route path="orders" element={<RequireAuth><MyOrders /></RequireAuth>} />
          <Route path="reviews" element={<RequireAuth><MyReviews /></RequireAuth>} />
          <Route path="profile" element={<RequireAuth><MyProfile /></RequireAuth>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
