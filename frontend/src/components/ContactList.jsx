import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/contacts";

export default function ContactList({ contacts, fetchContacts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await axios.delete(`${API}/${id}`);
      fetchContacts();
    }
  };

  // Filter logic
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl border border-white overflow-hidden flex flex-col h-175">
      
      {/* --- STATIC HEADER SECTION --- */}
      <div className="p-6 border-b border-gray-100 bg-white/50">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Your Network</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-1">
              {filteredContacts.length} Contacts Found
            </p>
          </div>
          <div className="h-10 w-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        {/* SEARCH TAB */}
        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-indigo-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-100/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-400 transition-all outline-none text-sm font-medium"
          />
        </div>
      </div>

      {/* --- SCROLLABLE CONTENT AREA --- */}
      <div className="flex-1 overflow-y-auto p-6 scroll-smooth custom-scrollbar">
        {filteredContacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-10">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-400 font-medium">No matches found for "{searchTerm}"</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContacts.map((c) => (
  <div
    key={c._id}
    className="group bg-white/40 hover:bg-white p-4 rounded-2xl transition-all border border-transparent hover:border-indigo-50 hover:shadow-lg flex justify-between items-center"
  >
    <div className="flex items-center gap-4">
      {/* Avatar */}
      <div className="h-12 w-12 bg-linear-to-tr from-indigo-600 to-violet-400 rounded-xl flex items-center justify-center text-white font-bold shadow-md shrink-0">
        {c.name.charAt(0).toUpperCase()}
      </div>
      
      {/* Contact Details */}
      <div className="min-w-0"> {/* min-w-0 prevents text overflow issues */}
        <p className="font-bold text-gray-800 truncate">{c.name}</p>
        <div className="flex flex-col sm:flex-row sm:gap-3 mt-0.5">
          <p className="text-xs text-indigo-500 font-semibold flex items-center gap-1">
            <span>📞</span> {c.phone}
          </p>
          <p className="text-xs text-gray-500 font-medium flex items-center gap-1 truncate">
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>✉️</span> {c.email || "No email provided"}
          </p>
        </div>
      </div>
    </div>
    
    {/* Delete Action */}
    <button
      onClick={() => deleteContact(c._id)}
      className="p-2.5 rounded-xl text-gray-300 hover:bg-red-50 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 shrink-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
))}
          </div>
        )}
      </div>
      
      {/* BOTTOM DECORATION */}
      <div className="h-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>
    </div>
  );
}