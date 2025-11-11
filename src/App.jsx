import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

export default function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center">
      <Routes>
        <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}
