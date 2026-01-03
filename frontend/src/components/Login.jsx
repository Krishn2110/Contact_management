import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../api/axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard"; 
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 font-medium mt-2">Enter your details to access your vault</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-indigo-500 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full mt-2 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-indigo-500 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all mt-4">
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-slate-500 font-medium">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-bold hover:underline">
            Create one for free
          </Link>
        </p>
      </div>
    </div>
  );
}