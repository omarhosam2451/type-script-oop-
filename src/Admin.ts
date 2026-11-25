import { User } from "./User";
import { NoteBook } from "./NoteBook";

export class Admin extends User {
  public manageNotes(notebook: NoteBook): void {
    console.log("Managing notes:");
    notebook.getAllNotes().forEach(note => console.log(`${note.id}: ${note.title}`));
  }
}
