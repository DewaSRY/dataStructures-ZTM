//
export class Array<T> {
  public length: number = 0;
  private data: Partial<{ [key: number]: T }> = {};
  constructor(array: T[] = []) {
    this.data = array.reduce((acc, val, idx) => {
      return { ...acc, [idx]: val };
    }, {});
    this.length = array.length;
  }
  get(index: number): T | unknown {
    if (!this.data) return {};
    const result = this.data[index];
    return result;
  }
  push(item: T): void {
    this.data[this.length] = item;
    this.length++;
  }
  pop(): T | unknown {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastItem;
  }
  delete(index: number): T | unknown {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }
  private shiftItem(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      console.log(this.data);
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  allData(): (T | unknown)[] {
    return Object.values(this.data);
  }
}
