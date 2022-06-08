import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Regester from './Pages/Login/Regester/Regester';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/regester" element={<Regester />} /> 
          <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path='/dashboard' element={<DashboardHome></DashboardHome>} />
          <Route path='/dashboard/payment/:appointmentId' element={<Payment></Payment>} />
          <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>} />
          <Route path={`/dashboard/addDoctor`} element={<adminRoute><AddDoctor></AddDoctor></adminRoute>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
