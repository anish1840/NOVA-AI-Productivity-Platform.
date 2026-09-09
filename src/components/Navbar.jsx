import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import logo from "../assets/images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-white"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-blue-950/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-5">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="NOVA AI Logo"
            className="w-[135px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/features" className={navLinkClass}>
            Features
          </NavLink>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button  className="flex items-center gap-1 text-slate-400 transition hover:text-white">
              Solutions
              <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 top-8 flex w-52 flex-col gap-1 rounded-xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
                <NavLink
                  to="/solution/Startups"
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  Startups
                </NavLink>

                <NavLink
                  to="/solution/Developers"
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  Developers
                </NavLink>

                <NavLink
                  to="/solution/Marketing"
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  Marketing Teams
                </NavLink>

                <NavLink
                  to="/solutions"
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  View All Solutions
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/pricing" className={navLinkClass}>
            Pricing
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <NavLink
            to="/login"
            className="text-slate-400 transition hover:text-white"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className="py-3 text-slate-300 hover:text-violet-400"
            >
              Home
            </NavLink>

            <NavLink
              to="/features"
              onClick={closeMenu}
              className="py-3 text-slate-300 hover:text-violet-400"
            >
              Features
            </NavLink>

            {/* Mobile Solutions */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex w-full items-center justify-between py-3 text-slate-300"
              >
                Solutions
                <ChevronDown
                  size={18}
                  className={`transition ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="ml-4 flex flex-col border-l border-white/10 pl-4">
                  <NavLink
                    to="/solutions/startups"
                    onClick={closeMenu}
                    className="py-2 text-sm text-slate-400"
                  >
                    Startups
                  </NavLink>

                  <NavLink
                    to="/solutions/developers"
                    onClick={closeMenu}
                    className="py-2 text-sm text-slate-400"
                  >
                    Developers
                  </NavLink>

                  <NavLink
                    to="/solutions/marketing"
                    onClick={closeMenu}
                    className="py-2 text-sm text-slate-400"
                  >
                    Marketing Teams
                  </NavLink>

                  <NavLink
                    to="/solutions"
                    onClick={closeMenu}
                    className="py-2 text-sm text-slate-400"
                  >
                    View All Solutions
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/pricing" onClick={closeMenu} className="py-3 text-slate-300">
              Pricing
            </NavLink>

            <NavLink to="/about" onClick={closeMenu} className="py-3 text-slate-300">
              About
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu} className="py-3 text-slate-300">
              Contact
            </NavLink>

            <div className="my-3 border-t border-white/10" />

            <NavLink
              to="/login"
              onClick={closeMenu}
              className="py-3 text-center text-slate-300"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-center font-semibold text-white"
            >
              Get Started
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;