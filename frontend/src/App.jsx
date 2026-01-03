import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./api/axios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the guard

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";



export default function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await api.get("/contacts", {
        headers: { Authorization: `Bearer ${token}` } // Send token to backend
      });
      setContacts(res.data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-poppins">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* PROTECTED DASHBOARD ROUTE */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <main className="max-w-7xl mx-auto px-6 py-12">
                  <div className="grid lg:grid-cols-5 gap-12 items-start">
                   <div className="lg:col-span-2 lg:sticky lg:top-28 z-10">
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
                        <p className="text-slate-500 font-medium">Your private network.</p>
                      </div>
                      <ContactForm fetchContacts={fetchContacts} />
                    </div>
                    <div className="lg:col-span-3 z-20 relative">
                      <ContactList contacts={contacts} fetchContacts={fetchContacts} />
                    </div>
                  </div>
                </main>
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
