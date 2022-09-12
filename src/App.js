import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/DashBoard/ManageOrders/ManageOrders';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';
import ManageProduct from './Pages/DashBoard/ManageProduct/ManageProduct';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import Payment from './Pages/DashBoard/Payment/Payment';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DashboardNavbar from './Pages/Shared/Navbar/DashboardNavbar';


function App() {
  const { pathname } = useLocation()

  return (
    <div className="">
      {!pathname.includes('dashboard') && <Navbar />}

      {pathname.includes('dashboard') && <DashboardNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /> </RequireAuth>}>
          <Route path="orders" element={<RequireAuth><MyOrders /></RequireAuth>} />
          <Route path="reviews" element={<RequireAuth><MyReviews /></RequireAuth>} />
          <Route path="profile" element={<RequireAuth><MyProfile /></RequireAuth>} />
          <Route path="payment/:id" element={<RequireAuth><Payment /></RequireAuth>} />
          <Route path="makeAdmin" element={
            <RequireAuth>
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            </RequireAuth>} />
          <Route path="manageOrder" element={
            <RequireAuth>
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            </RequireAuth>} />
          <Route path="addProduct" element={
            <RequireAuth>
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            </RequireAuth>} />
          <Route path="manageProduct" element={
            <RequireAuth>
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            </RequireAuth>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!pathname.includes('dashboard') && <Footer />}
      <ToastContainer />
    </div>
  );
}


AOS.init();


export default App;
