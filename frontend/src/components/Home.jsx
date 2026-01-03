import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-125 w-125 -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>


      <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
        The smarter way to <br />
        <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600">
          manage connections.
        </span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
        Stop losing phone numbers and emails. Store your network in a secure, 
        beautiful, and searchable vault designed for modern professionals.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/dashboard"
          className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all"
        >
          Open My Contacts
        </Link>
      
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-slate-400 font-medium uppercase text-xs tracking-[0.2em]">
        <p>✨ Cloud Sync</p>
        <p>🛡️ Secure Data</p>
        <p className="hidden md:block">🚀 Fast Search</p>
      </div>
    </div>
  );
}