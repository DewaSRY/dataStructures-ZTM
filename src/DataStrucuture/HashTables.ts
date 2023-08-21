/**HashTable
 * Has tables are used to store key-value pairs, they are like
 * arrays, but the keys are not ordered, Unlike arrays, hash
 * table are fast for all of the following operations: finding
 * values, adding new values and removing values
 */
/**The Hash Part
 * To implement a hash table, we'll using an array, in order to
 * look up values by key we need a way convert keys into valid
 * array indices. a function that perform this task is called a
 * hash function
 * in simple word hash function we need is the function can
 * generate random number constant base on the length of the
 * array
 */
/**HashTable we will build will store data in array look like
 *[
 *  [[key,value ],key,value ]],
 *  [[key,value ],key,value ]],
 *  [[key,value ],key,value ]],
 *]
 *tha hash table will store table on two dimension array
 * the big table on a row ho store tha data base on the hash
 * address
 */
export class HashTable<T> {
  public data: Array<Array<[string, T]>>;
  constructor(size: number) {
    this.data = new Array<Array<[string, T]>>(size);
  }
  /**Andre hashing
   * this old hashing method is the old one withe some error
   * where this function have collation issue
   */
  _hash(key: string): number {
    let hash = 0;
    const dataLength = this.data.length;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % dataLength;
    }
    return hash;
  }
  /**cold hashing
   * to dodge the collusion we add prime number
   * while hashing
   *  The Prime number in the hashing is helpful in spreading
   * out key more uniformly. it's also helpful if the array
   * that your putting values into has a prime length
   * You don't need to
   */
  hash(key: string) {
    let total = 0;
    let wiredPrime = 3;
    const arrayLen = this.data.length - 1;
    for (let num = 0; num < Math.min(key.length, 100); num++) {
      let char = key[num];
      let value = char.charCodeAt(0) - 96;
      total = (total * wiredPrime + value) % arrayLen;
    }
    return total;
  }
  /** set
   * on the first time all room inside the array table is
   * undefine so we put array inside table as a row then
   * we put the key an value as tuple, for the second tuple
   * with same address we just need to push it on the row
   * array already define
   */
  set(key: string, value: T) {
    let address = this.hash(key);
    let tupleValue: [string, T] = [key, value];
    if (this.data[address]) {
      let currentTuple = this.data[address].find((tuple) => tuple[0] === key);
      if (currentTuple) {
        this.data[address].forEach((tuple) => {
          if (tuple[0] === key) tuple[1] = value;
        });
      } else this.data[address].push(tupleValue);
    } else if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push(tupleValue);
    }
    return tupleValue;
  }
  get(key: string) {
    let address = this.hash(key);
    const currentBucket = this.data[address];
    if (!currentBucket) throw new Error(`${key} doesn't match any data`);
    else if (currentBucket) {
      for (let bucket of currentBucket) {
        if (bucket[0] === key) {
          return bucket;
        }
      }
      throw new Error(`${key} doesn't match any data`);
    }
  }
  prettyPrint() {
    let table = [];
    let allData = this.data;
    for (let row of allData) {
      if (row) {
        for (let tuple of row) {
          let [key, value] = tuple;
          let map: { [key: string]: T } = {};
          map[key] = value;
          table.push(map);
        }
      }
    }
    return table;
  }
}
