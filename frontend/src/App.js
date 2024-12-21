import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import TableBook from "./pages/TableBook";
import Order from "./pages/Order";
import Branches from "./pages/Branches";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import MyBookings from "./pages/MyBookings";
import MyOrders from "./pages/MyOrders";
// import Developers from './pages/Developers';
import Designers from "./pages/Designers";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<TableBook />} />
          <Route path="/order" element={<Order />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/developers" element={<Designers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
