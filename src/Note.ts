import { User } from "./User";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public userId: number;
  public author: User;

  constructor(id: number, title: string, content: string, author: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.userId = author.id;
  }

  public preview(): string {
    return this.content.length > 30 ? this.content.substring(0, 30) + "..." : this.content;
  }
}
