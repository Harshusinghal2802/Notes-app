// src/components/Todos.jsx

import { useEffect, useState } from "react";

import API from "../api";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  // FETCH TODOS
  const fetchTodos = async () => {
    setLoading(true);

    try {
      const res = await API.get("/todos");

      setTodos(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // ADD TODO
  const addTodo = async () => {
    if (!text.trim()) return;

    try {
      await API.post("/todos", {
        text,
      });

      resetForm();

      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE TODO
  const updateTodo = async () => {
    try {
      await API.put(`/todos/${editId}`, {
        text,
      });

      resetForm();

      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE TODO
  const deleteTodo = async (id) => {
    try {
      await API.delete(`/todos/${id}`);

      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  // TOGGLE COMPLETE
  const toggleTodo = async (todo) => {
    try {
      // INSTANT UI UPDATE
      setTodos((prev) =>
        prev.map((t) =>
          t._id === todo._id
            ? {
                ...t,
                completed:
                  !t.completed,
              }
            : t
        )
      );

      // BACKEND UPDATE
      await API.put(
        `/todos/${todo._id}`,
        {
          text: todo.text,
          completed:
            !todo.completed,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT
  const handleEdit = (todo) => {
    setText(todo.text);

    setEditId(todo._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // RESET
  const resetForm = () => {
    setText("");

    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10">

      <div className="max-w-3xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold mb-3">
            ✅ Smart Todos
          </h1>

          <p className="text-gray-400">
            Manage your daily tasks
            beautifully ✨
          </p>

        </div>

        {/* FORM */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl mb-8">

          <label className="text-sm text-gray-300 mb-2 block">
            {editId
              ? "Edit Todo ✏️"
              : "Add New Todo ➕"}
          </label>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder="Enter your task..."
              value={text}
              onChange={(e) =>
                setText(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                (editId
                  ? updateTodo()
                  : addTodo())
              }
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={
                editId
                  ? updateTodo
                  : addTodo
              }
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
            >
              {editId
                ? "Update"
                : "Add"}
            </button>

          </div>

          {/* CANCEL BUTTON */}
          {editId && (
            <button
              onClick={resetForm}
              className="mt-4 text-gray-400 hover:text-white"
            >
              Cancel Edit
            </button>
          )}

        </div>

        {/* STATS */}
        <div className="flex justify-between items-center mb-6 text-gray-300 text-sm">

          <p>
            Total Tasks:{" "}
            <span className="font-bold text-white">
              {todos.length}
            </span>
          </p>

          <p>
            Completed:{" "}
            <span className="font-bold text-green-400">
              {
                todos.filter(
                  (t) =>
                    t.completed
                ).length
              }
            </span>
          </p>

        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-400">
            Loading Todos...
          </p>
        )}

        {/* EMPTY */}
        {!loading &&
          todos.length === 0 && (
            <div className="bg-white/10 rounded-3xl p-10 text-center">

              <h2 className="text-2xl mb-3">
                😢 No Todos Yet
              </h2>

              <p className="text-gray-400">
                Add your first task now
              </p>

            </div>
          )}

        {/* TODO LIST */}
        <div className="space-y-4">

          {todos.map((todo) => (
            <div
              key={todo._id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 flex items-center justify-between hover:bg-white/20 transition"
            >

              {/* LEFT */}
              <div className="flex items-center gap-4 flex-1">

                {/* CHECKBOX */}
                <input
                  type="checkbox"
                  checked={
                    todo.completed
                  }
                  onChange={() =>
                    toggleTodo(todo)
                  }
                  className="w-5 h-5 accent-purple-500 cursor-pointer"
                />

                {/* TEXT */}
                <div>

                  <p
                    className={`text-lg ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-white"
                    }`}
                  >
                    {todo.text}
                  </p>

                  <span className="text-xs text-gray-500">
                    {new Date(
                      todo.createdAt
                    ).toLocaleDateString()}
                  </span>

                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">

                {/* EDIT */}
                <button
                  onClick={() =>
                    handleEdit(todo)
                  }
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition"
                >
                  ✏️
                </button>

                {/* DELETE */}
                <button
                  onClick={() =>
                    deleteTodo(todo._id)
                  }
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition"
                >
                  🗑️
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}