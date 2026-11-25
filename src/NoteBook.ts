import { Note } from "./Note";

export class NoteBook {
  private notes: Note[] = [];

  public addNote(note: Note): void {
    this.notes.push(note);
  }

  public removeNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  public getAllNotes(): Note[] {
    return [...this.notes];
  }
}
