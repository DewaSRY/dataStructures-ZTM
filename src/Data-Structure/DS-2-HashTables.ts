type ValueType=(number|boolean|String|Function)
type RoomValue=[string ,ValueType]
type RoomObject=[number,RoomValue]|[]
type ObjecRomm=RoomObject[]|[]
export class HashTable {
    data:any
    constructor(size:number) {
      this.data = new Array<RoomObject>(size);
    }
    private _hash(key:string):number {
      let hash = 0;
      const {length}=this.data
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) & length;
      }
      return hash;
    }
    set(key:string, value:ValueType) {
      if (!key || !value)throw new Error('need to have some value')
      const makeValue:RoomValue=[key, value]
      let address = this._hash(key);
      console.log(address)
      if(!address)throw new Error('can\'t define ')
      if (!this.data[address]) {
        this.data[address] = [] as RoomObject
      }
      this.data[address].push(makeValue)
      return this.data;
    }
    get(key:string):RoomValue {
      let address = this._hash(key);
      const currentBucket = this.data[address];
      if(!currentBucket)throw new Error('the key is unset yet')
      if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
    }
    keys():string[] {
      const keyArray = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          keyArray.push(this.data[i][0][0]);
        }
      }
      return keyArray;
    }
  }