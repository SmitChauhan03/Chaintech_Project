import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Signup() {
  const [form, setForm] = useState({ name: "", username: "", email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    setUser(form); 
    navigate("/profile");
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
      <h2 className="text-2xl text-white font-semibold mb-6 text-center">Create Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="p-2 bg-gray-700 rounded" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="p-2 bg-gray-700 rounded" placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })} required />
        <input type="email" className="p-2 bg-gray-700 rounded" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="password" className="p-2 bg-gray-700 rounded" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded mt-3">Sign Up</button>
      </form>
      <p className="text-sm text-center mt-3">
        Already have an account? <Link className="text-blue-400" to="/">Login</Link>
      </p>
    </div>
  );
}
