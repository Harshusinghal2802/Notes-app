import Notes from "../pages/Notes";

export default function NotesPage({ search }) {
  return (
    <div>
      <Notes search={search} />
    </div>
  );
}