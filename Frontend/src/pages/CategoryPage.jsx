import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { name } = useParams();

  const demoNotes = [
    {
      title: "Meeting Notes",
      content: "Prepare presentation for client meeting.",
    },
    {
      title: "Daily Tasks",
      content: "Finish UI design and backend API.",
    },
    {
      title: "Important Idea",
      content: "Build AI powered notes feature.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-10">
          📂 {name} Notes
        </h1>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {demoNotes.map((note, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-[1.03] transition"
            >

              <h2 className="text-2xl font-semibold mb-3">
                {note.title}
              </h2>

              <p className="text-gray-300">
                {note.content}
              </p>

              <button className="mt-5 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-xl">
                Open Note
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}