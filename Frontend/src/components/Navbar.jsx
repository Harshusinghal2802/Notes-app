// src/components/Navbar.jsx

import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../context/AuthContext";

export default function Navbar({
  search,
  setSearch,
}) {
  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg sticky top-0 z-50 border-b border-white/10">

      <div className="px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          📝 Smart Notes
        </h1>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-5">

          {user && (
            <input
              type="text"
              placeholder="Search notes..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 outline-none"
            />
          )}

          {user && (
            <>
              <NavLink to="/notes">
                Notes
              </NavLink>

              <NavLink to="/todos">
                Todos
              </NavLink>
            </>
          )}

          {!user ? (
            <>
              <NavLink to="/login">
                Login
              </NavLink>

              <NavLink to="/register">
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">

          {user && (
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 outline-none"
            />
          )}

          {user && (
            <>
              <NavLink to="/notes">
                Notes
              </NavLink>

              <NavLink to="/todos">
                Todos
              </NavLink>
            </>
          )}

          {!user ? (
            <>
              <NavLink to="/login">
                Login
              </NavLink>

              <NavLink to="/register">
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 py-2 rounded-xl"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
}