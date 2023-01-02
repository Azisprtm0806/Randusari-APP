import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Daftar from "./container/Daftar/Daftar";
import Login from "./container/Login/Login";
import DataPenduduk from "./container/Pages/DataPenduduk/DataPenduduk";
import EditPenduduk from "./container/Pages/DataPenduduk/EditPenduduk";
import Home from "./container/Pages/Home/Home";
import Masjid from "./container/Pages/Masjid/Masjid";
import Profile from "./container/Pages/Profile/Profile";
import EditProfile from "./container/Pages/Profile/EditProfile/EditProfile";
import EditKasMasuk from "./container/Pages/Masjid/Action/EditKasMasuk";
import "./index.css";
import EditKasKeluar from "./container/Pages/Masjid/Action/EditKasKeluar";
import ForgotPassword from "./container/ForgotPassword/ForgotPassword";
import ResetPassword from "./container/ResetPassword/ResetPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
const user = localStorage.getItem("token");
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/daftar" element={<Daftar />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/reset-password/:token" element={<ResetPassword />}></Route>
      {user && <Route path="/home" element={<Home />}></Route>}
      {user && <Route path="/profile" element={<Profile />}></Route>}
      {user && <Route path="/edit-profile" element={<EditProfile />}></Route>}
      {user && <Route path="/data-penduduk" element={<DataPenduduk />}></Route>}
      {user && (
        <Route path="/edit-penduduk/:id" element={<EditPenduduk />}></Route>
      )}
      {user && <Route path="/kas-masjid" element={<Masjid />}></Route>}
      {user && (
        <Route path="/edit-kas-masuk/:id" element={<EditKasMasuk />}></Route>
      )}
      {user && (
        <Route path="/edit-kas-keluar/:id" element={<EditKasKeluar />}></Route>
      )}

      {/* LOGOUT ROUTE */}
      <Route path="/home" element={<Navigate replace to="/" />}></Route>
      <Route path="/profile" element={<Navigate replace to="/" />}></Route>
      {/* <Route path="/edit-profile" element={<Navigate replace to="/" />}></Route> */}
      <Route
        path="/data-penduduk"
        element={<Navigate replace to="/" />}
      ></Route>
      <Route path="/kas-masjid" element={<Navigate replace to="/" />}></Route>
    </Routes>
  </BrowserRouter>
);
