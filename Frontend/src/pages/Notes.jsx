// src/pages/Notes.jsx

import { useEffect, useState } from "react";
import API from "../api";
import NoteCard from "../components/NoteCard";

export default function Notes({ search }) {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");

  const [content, setContent] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  // CATEGORY
  const categories = [
    "All",
    "Work",
    "Personal",
    "Study",
    "Ideas",
    "Travel",
    "Professional",
  ];

  const [category, setCategory] =
    useState("All");

  // FETCH NOTES
  const fetchNotes = async () => {
    setLoading(true);

    try {
      let url = `/notes?search=${search}`;

      if (category !== "All") {
        url += `&category=${category}`;
      }

      const res = await API.get(url);

      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, [search, category]);

  // ADD NOTE
  const addNote = async () => {
    if (!title.trim()) return;

    try {
      await API.post("/notes", {
        title,
        content,
        category:
          category === "All"
            ? "Work"
            : category,
      });

      resetForm();

      fetchNotes();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE NOTE
  const deleteNote = async (id) => {
    try {
      await API.delete(`/notes/${id}`);

      fetchNotes();
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT
  const handleEdit = (note) => {
    setTitle(note.title);

    setContent(note.content);

    setCategory(note.category);

    setEditId(note._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // UPDATE
  const updateNote = async () => {
    try {
      await API.put(`/notes/${editId}`, {
        title,
        content,
        category,
      });

      resetForm();

      fetchNotes();
    } catch (err) {
      console.log(err);
    }
  };

  // RESET
  const resetForm = () => {
    setTitle("");

    setContent("");

    setCategory("All");

    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h1 className="text-4xl font-bold text-center mb-10">
          📝 Smart Notes
        </h1>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setCategory(cat)
              }
              className={`px-5 py-2 rounded-full transition duration-300 ${
                category === cat
                  ? "bg-purple-600"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* FORM */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl mb-10">

          <input
            type="text"
            placeholder="Note Title..."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full mb-4 px-4 py-3 rounded-xl bg-white/10 border border-white/10 outline-none"
          />

          <textarea
            placeholder="Write your note..."
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            rows="5"
            className="w-full mb-4 px-4 py-3 rounded-xl bg-white/10 border border-white/10 outline-none"
          />

          {/* CATEGORY SELECT */}
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-900 border border-white/10 outline-none"
          >
            {categories
              .filter((c) => c !== "All")
              .map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              ))}
          </select>

          <div className="flex gap-4">

            <button
              onClick={
                editId
                  ? updateNote
                  : addNote
              }
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
            >
              {editId
                ? "Update Note"
                : "Add Note"}
            </button>

            {editId && (
              <button
                onClick={resetForm}
                className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl"
              >
                Cancel
              </button>
            )}

          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-400">
            Loading...
          </p>
        )}

        {/* EMPTY */}
        {!loading &&
          notes.length === 0 && (
            <p className="text-center text-gray-400">
              No Notes Found 😢
            </p>
          )}

        {/* NOTES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={deleteNote}
              onEdit={handleEdit}
            />
          ))}

        </div>
      </div>
    </div>
  );
}