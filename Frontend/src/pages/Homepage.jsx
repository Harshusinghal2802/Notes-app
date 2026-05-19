import { Link } from "react-router-dom";

const categories = [
  {
    title: "Work",
    emoji: "💼",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Personal",
    emoji: "🏠",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Study",
    emoji: "📚",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Ideas",
    emoji: "💡",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Travel",
    emoji: "✈️",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Professional",
    emoji: "👔",
    color: "from-red-500 to-pink-500",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Smart Notes Dashboard
          </h1>

          <p className="text-gray-400 text-lg">
            Organize your life beautifully ✨
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {categories.map((cat, index) => (
            <Link
              to={`/category/${cat.title}`}
              key={index}
              className={`bg-gradient-to-br ${cat.color} p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300`}
            >
              <div className="text-5xl mb-4">
                {cat.emoji}
              </div>

              <h2 className="text-2xl font-bold">
                {cat.title}
              </h2>

              <p className="mt-2 text-white/80">
                Open {cat.title} Notes
              </p>
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}