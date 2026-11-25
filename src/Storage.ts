export class Storage<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public removeItem(item: T): void {
    this.items = this.items.filter(current => current !== item);
  }

  public getAllItems(): T[] {
    return [...this.items];
  }
}
