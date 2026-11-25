"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteBook = void 0;
class NoteBook {
    constructor() {
        this.notes = [];
    }
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }
    getAllNotes() {
        return [...this.notes];
    }
}
exports.NoteBook = NoteBook;
