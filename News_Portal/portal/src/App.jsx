import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Category from "./pages/Category";
import SingleNews from "./pages/SingleNews";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import CreateNews from "./admin/CreateNews";
import ManageNews from "./admin/ManageNews";
import EditNews from "./admin/EditNews";
import Profile from "./admin/Profile";
import ChangePassword from "./admin/ChangePassword";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/news/:id" element={<SingleNews />} />

        {/* Admin Pages */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/create-news" element={<CreateNews />} />
        <Route path="/admin/manage-news" element={<ManageNews />} />
        <Route path="/admin/edit-news/:id" element={<EditNews />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;