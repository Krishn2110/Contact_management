export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 px-4 pb-8">
      {/* The Glass Box */}
      <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 shadow-xl shadow-indigo-100/50">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 bg-linear-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-900 to-violet-800">
                ContactHub
              </span>
            </div>
            <p className="text-xs text-gray-500 font-medium ml-1">Organize your world, one contact at a time.</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition-all hover:-translate-y-0.5">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-all hover:-translate-y-0.5">Security</a>
            <a href="#" className="hover:text-indigo-600 transition-all hover:-translate-y-0.5">Support</a>
          </div>

          {/* Social / Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4 mb-1">
              {/* Simple Icon Placeholders */}
              <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer">
                <span className="text-xs font-bold">git</span>
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              © {currentYear} • Designed for Excellence
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}