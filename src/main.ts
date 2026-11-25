import { User } from "./User";
import { Admin } from "./Admin";
import { Note } from "./Note";
import { NoteBook } from "./NoteBook";
import { Storage } from "./Storage";

const user = new User(1, "Omar", "omar@example.com", "123456", "01000000000", 22);
const notebook = new NoteBook();
const note = new Note(1, "First Note", "This is my first note in the notes management system.", user);

notebook.addNote(note);
user.addNotebook(notebook);

user.displayInfo();
console.log(note.preview());

const admin = new Admin(2, "Admin", "admin@example.com", "admin123", "01100000000", 30);
admin.manageNotes(notebook);

const storage = new Storage<Note>();
storage.addItem(note);
console.log(storage.getAllItems());
storage.removeItem(note);
console.log(storage.getAllItems());
