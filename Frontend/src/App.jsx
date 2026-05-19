// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import NotesPage from "./pages/NotesPage";
import TodosPage from "./pages/TodosPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">

      <Navbar search={search} setSearch={setSearch} />

      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* NOTES */}
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <NotesPage search={search} />
            </ProtectedRoute>
          }
        />

        {/* TODOS */}
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <TodosPage />
            </ProtectedRoute>
          }
        />

        {/* DEFAULT */}
        <Route
          path="*"
          element={<Navigate to="/notes" />}
        />

      </Routes>
    </div>
  );
}