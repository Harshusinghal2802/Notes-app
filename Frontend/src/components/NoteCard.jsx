// src/components/NoteCard.jsx

export default function NoteCard({
  note,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-lg flex flex-col justify-between hover:scale-[1.02] transition duration-300">

      <div>

        {/* CATEGORY */}
        <span className="inline-block mb-3 text-xs bg-purple-600 px-3 py-1 rounded-full">
          {note.category}
        </span>

        <h2 className="text-xl font-bold text-white mb-2">
          {note.title}
        </h2>

        <p className="text-gray-300 break-words">
          {note.content}
        </p>

      </div>

      <div className="mt-5 flex justify-between items-center">

        <span className="text-xs text-gray-400">
          {new Date(
            note.createdAt
          ).toLocaleDateString()}
        </span>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(note)}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg"
          >
            Edit
          </button>

          <button
            onClick={() =>
              onDelete(note._id)
            }
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}