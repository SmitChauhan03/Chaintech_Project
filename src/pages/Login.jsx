import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.username === form.username && savedUser.password === form.password) {
      setUser(savedUser); 
      navigate("/profile");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
      <h2 className="text-2xl text-white font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="p-2 bg-gray-700 rounded" placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })} required />
        <input type="password" className="p-2 bg-gray-700 rounded" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded mt-3">Login</button>
      </form>
      <p className="text-sm text-center mt-3">
      <Link className="text-blue-400" to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
