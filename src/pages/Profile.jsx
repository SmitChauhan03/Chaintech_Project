import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [editable, setEditable] = useState(false);
  const [form, setForm] = useState(user);

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(form));
    setUser(form);
    setEditable(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); 
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-300">Full Name</label>
            <input
              className="p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.name}
              readOnly={!editable}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-300">Username</label>
            <input
              className="p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.username}
              readOnly={!editable}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-300">Email</label>
            <input
              className="p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              readOnly={!editable}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Buttons */}
          {editable ? (
            <button
              className="bg-green-600 py-2 rounded hover:bg-green-700 transition"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-600 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setEditable(true)}
            >
              Edit
            </button>
          )}

          <button
            className="bg-red-600 py-2 rounded hover:bg-red-700 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
