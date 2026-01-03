import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Force refresh to clear states
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-700 backdrop-blur-md shadow-lg shadow-indigo-200/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm border border-white/30">
            <span className="text-xl">📇</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">ContactHub</span>
        </Link>

        {/* AUTH ACTIONS */}
        <div className="flex items-center gap-3">
          {!token ? (
            <>
              <Link 
                to="/login" 
                className="text-sm font-bold text-indigo-50 hover:text-white transition-colors px-4"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-6 py-2 bg-white text-indigo-600 rounded-xl text-sm font-extrabold shadow-sm hover:bg-indigo-50 hover:scale-105 transition-all"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
             
              <button 
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white border border-white/20 rounded-xl text-sm font-bold transition-all shadow-inner"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}