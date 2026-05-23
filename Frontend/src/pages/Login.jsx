import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import API from "../api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await API.post(
        "/auth/login",
        form
      );

      login(res.data);

      navigate("/notes");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[120px] top-[-100px] left-[-100px]" />

      <div className="absolute w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* CARD */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
      >
        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
            🔐
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Login to continue your journey
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-xl">
            {error}
          </div>
        )}

        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm block mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="text-gray-300 text-sm block mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.02] active:scale-[0.98] transition-all py-3 rounded-2xl text-white font-semibold shadow-lg"
        >
          {loading ? "Please Wait..." : "Login"}
        </button>

        {/* FOOTER */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 hover:text-pink-400 transition"
          >
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
}