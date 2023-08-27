/** Array
 * array is data structure how organize data sequentially
 * array store data ordered by index from (0 - n)
 */
export class Array<T> {
  public length: number = 0;
  public data: Record<number, T | number> = {};
  constructor(array: (number | T)[] = []) {
    this.insertMuch(array);
  }
  insertMuch(arr: (number | T)[]) {
    this.data = arr.reduce((acc, val, idx) => {
      return { ...acc, [idx]: val };
    }, {});
    this.length = arr.length;
  }
  get(index: number): T | unknown {
    if (!this.data) return {};
    const result = this.data[index];
    return result;
  }
  /** push
   * use to add value and add it on the lest sequence
   */
  push(item: T | number) {
    this.data[this.length] = item;
    this.length++;
    return this;
  }
  /** pop
   * should delete the last value
   */
  pop(): T | number {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  /** lookUp
   * Should return value base in index
   */
  lookUp(index: number) {
    if (index >= this.length) return -1;
    else if (index < 0) return -1;
    else return this.data[index];
  }
  /** delete
   *  should remove the value from index then re-structure
   * the chaining data
   */
  delete(index: number): T | unknown {
    const value = this.data[index];
    if (index >= this.length) return -1;
    else if (index < 0) return -1;
    this.shiftItem(index);
    return value;
  }
  private shiftItem(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  getAll(): (T | unknown)[] {
    return Object.values(this.data);
  }
}
