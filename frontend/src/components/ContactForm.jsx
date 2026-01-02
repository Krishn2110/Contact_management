import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/contacts";

export default function ContactForm({ fetchContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [success, setSuccess] = useState("");

  const isValid =
    form.name &&
    form.phone &&
    (!form.email || /\S+@\S+\.\S+/.test(form.email));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess("✅ Contact added successfully!");
    fetchContacts();
    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New</h2>
      
      <div className="space-y-4">
        {["name", "email", "phone"].map((field) => (
          <div key={field}>
            <label className="text-sm font-semibold uppercase tracking-wider text-indigo-500 ml-1">{field}</label>
            <input
              placeholder={`Enter ${field}...`}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="w-full mt-1 p-3 bg-gray-50/50 border border-indigo-400 rounded-2xl focus:ring-2 focus:ring-indigo-400 transition-all outline-none"
            />
          </div>
        ))}

        <div>
          <label className="text-sm font-semibold uppercase tracking-wider text-indigo-500 ml-1">Message</label>
          <textarea
            placeholder="Write a note..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full mt-1 p-3 bg-gray-50/50 border border-indigo-400 rounded-2xl h-24 focus:ring-2 focus:ring-indigo-400 transition-all outline-none"
          />
        </div>

        <button
          disabled={!isValid}
          className={`w-full py-4 rounded-2xl font-bold text-white transition-all shadow-lg ${
            isValid 
              ? "bg-linear-to-r from-indigo-600 to-violet-600 hover:scale-[1.02] active:scale-95 shadow-indigo-200" 
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Save Contact
        </button>
      </div>

      {success && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-xl text-center text-sm font-medium animate-bounce">
          {success}
        </div>
      )}
    </form>
  );
}