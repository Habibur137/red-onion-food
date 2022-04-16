import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Breakfast from "./Pages/Home/Services/Breakfast/Breakfast";
import Dinner from "./Pages/Home/Services/Dinner/Dinner";
import Lunch from "./Pages/Home/Services/Lunch/Lunch";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Navbar from "./Pages/Navbar/Navbar";
import Orders from "./Pages/Orders/Orders";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Reviews from "./Pages/Shared/Reviews/Reviews";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="dinner/:reviewsId" element={<Reviews />} />
        <Route path="breakfast/:reviewsId" element={<Reviews />} />
        <Route path="lunch/:reviewsId" element={<Reviews />} />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
