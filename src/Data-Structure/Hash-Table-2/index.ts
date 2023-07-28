export class HashTable<T> {
  public data: Array<Array<[string, T][]>>;
  constructor(size: number) {
    this.data = new Array<Array<[string, T][]>>(size);
  }
  _hash(key: string): number {
    let hash = 0;
    const { length } = this.data;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % length;
    }
    return hash;
  }
  set(key: string, value: T) {
    let address = this._hash(key);
    if (this.data[address]) {
      for (let entry of this.data[address]) {
        if (entry) {
          entry.push([key, value]);
          return;
        }
      }
    } else if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([[key, value]]);
  }
  get(key: string) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let bucket of currentBucket[0]) {
        if (bucket[0] === key) {
          return bucket;
          console.log(bucket);
        }
      }
    }
  }
  keys() {
    const keyArray = this.data.reduce((map, dimension) => {
      for (let secondD of dimension) {
        for (let bucket of secondD) {
          if (bucket) {
            const [key, value] = bucket;
            map[key] = value;
            return map;
          }
        }
      }
    }, {} as any);

    return keyArray;
  }
}
