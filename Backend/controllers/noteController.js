import Note from "../models/Note.js";

// GET NOTES
export const getNotes = async (req, res) => {
  const search = req.query.search || "";
  const category = req.query.category || "";

  let query = {
    user: req.user,
  };

  if (search) {
    query.title = {
      $regex: search,
      $options: "i",
    };
  }

  if (category) {
    query.category = category;
  }

  const notes = await Note.find(query).sort({
    createdAt: -1,
  });

  res.json(notes);
};

// CREATE
export const createNote = async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.create({
    title,
    content,
    category,
    user: req.user,
  });

  res.json(note);
};

// DELETE
export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};

// UPDATE
export const updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.json(note);
};