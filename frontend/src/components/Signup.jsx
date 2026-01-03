import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", form);
      
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard"; 
      } else {
        alert("Account created! Please log in.");
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Get Started</h2>
          <p className="text-slate-500 font-medium mt-2">Join 1,000+ users managing contacts</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-indigo-500 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-indigo-500 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full mt-1 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-indigo-500 ml-1">Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="w-full mt-1 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button className="w-full py-4 bg-linear-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:scale-[1.02] active:scale-95 transition-all mt-4">
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-slate-500 font-medium">
          Already a member?{" "}
          <Link to="/login" className="text-indigo-600 font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
