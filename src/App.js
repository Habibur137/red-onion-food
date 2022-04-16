import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Navbar from "./Pages/Navbar/Navbar";
import Orders from "./Pages/Orders/Orders";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
