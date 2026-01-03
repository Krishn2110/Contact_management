import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// Import Icons
import { Home, LogIn, UserPlus, LayoutDashboard, LogOut, Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-100 w-full bg-indigo-600/95 backdrop-blur-md border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <div className="bg-white p-2 rounded-xl shadow-inner shadow-indigo-200">
            <span className="text-2xl leading-none">📇</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">ContactHub</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-white' : 'text-indigo-100 hover:text-white'}`}
          >
            <Home size={18} />
            Home
          </Link>
          
          {!token ? (
            <div className="flex items-center gap-6 ml-4">
              <Link to="/login" className="flex items-center gap-2 text-sm font-semibold text-indigo-50 hover:text-white transition">
                <LogIn size={18} />
                Login
              </Link>
              <Link to="/signup" className="flex items-center gap-2 px-6 py-2.5 bg-white text-indigo-600 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-50 hover:-translate-y-0.5 transition-all">
                <UserPlus size={18} />
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link 
                to="/dashboard" 
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${location.pathname === '/dashboard' ? 'text-white' : 'text-indigo-100 hover:text-white'}`}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden absolute w-full bg-indigo-700 border-b border-indigo-500 transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-3 text-indigo-100 font-semibold py-3 border-b border-white/5">
            <Home size={20} /> Home
          </Link>
          
          {token && (
            <Link to="/dashboard" className="flex items-center gap-3 text-indigo-100 font-semibold py-3 border-b border-white/5">
              <LayoutDashboard size={20} /> Dashboard
            </Link>
          )}
          
          {!token ? (
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login" className="flex items-center justify-center gap-2 text-indigo-50 font-semibold py-3">
                <LogIn size={20} /> Login
              </Link>
              <Link to="/signup" className="flex items-center justify-center gap-2 w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold shadow-lg">
                <UserPlus size={20} /> Sign Up
              </Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full bg-red-500 text-white py-4 rounded-2xl font-bold mt-4">
              <LogOut size={20} /> Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}