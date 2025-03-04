const updateNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = "";
    notes.forEach((element) => createNote(element));
  }
};

const addNote = (event) => {
  event.preventDefault();
  const element = document.getElementById("new_note_name");
  let previousNotes = JSON.parse(localStorage.getItem("notes"));
  if (!previousNotes) {
    previousNotes = [];
  }
  previousNotes.push(element.value);
  localStorage.setItem("notes", JSON.stringify(previousNotes));
  element.value = "";
  updateNotes();
};

const deleteNote = (element) => {
  let notes = JSON.parse(localStorage.getItem("notes"));
  index = notes.findIndex((item) => item === element);
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  updateNotes();
};

const createNote = (element) => {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
  deleteButton.className = "note_remove";
  deleteButton.onclick = () => deleteNote(element);

  const note = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = element;
  note.appendChild(span);
  note.appendChild(deleteButton);
  const noteList = document.getElementById("note-list");
  noteList.appendChild(note);
};

document.getElementById("new_note_add").addEventListener("click", addNote);

updateNotes();
