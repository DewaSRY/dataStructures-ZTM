interface Monarchy {
  birth(child: string, parent: string): void;
  death(name: string): void;
  getOdderOfSuccession(): string[];
}
class Person {
  public isAlive: boolean = true;
  public children: Person[] = [];
  constructor(public name: string) {}
}
class Monarchy {
  public king: Person;
  private person: Record<string, Person> = {};
  constructor(king: string) {
    this.king = new Person(king);
    this.person[this.king.name] = this.king;
  }
  birth(child: string, parent: string): void {
    let parentNode = this.person[parent];
    let childNode = new Person(child);
    parentNode.children.push(childNode);
    this.person[childNode.name] = childNode;
  }
  death(name: string) {
    let personNode = this.person[name];
    if (personNode === undefined) return;
    personNode.isAlive = false;
  }
  getOdderOfSuccession() {
    const order: string[] = [];
    this.def(this.king, order);
    return order;
  }
  def(currentPerson: Person, list: string[] = []) {
    if (currentPerson.isAlive) {
      list.push(currentPerson.name);
    }
    if (!currentPerson.children.length) return;
    currentPerson.children.forEach((children) => {
      this.def(children, list);
    });
  }
}
/**Implement Prefix Trie (Medium)
 * Implement a trie with insert, search and startWith
 * methods.
 *
 */
class Nodes {
  public end: boolean = false;
  public keys: Record<string, Nodes> = {};
}
interface Trie {
  insert(word: string): void;
  search(word: string): boolean;
  startWith(prefix: string): boolean;
}
class Trie {
  public root = new Nodes();
  constructor() {}
  insert(word: string, node = this.root) {
    if (word.length === 0) {
      node.end = true;
      return;
    } else if (!node.keys[word[0]]) {
      node.keys[word[0]] = new Nodes();
      this.insert(word.substring(1), node.keys[word[0]]);
    } else {
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  }
  search(word: string, node = this.root): boolean {
    if (word.length === 0 && node.end) return true;
    else if (word.length === 0 && node.end === false) return false;
    else if (!node.keys[word[0]]) return false;
    else {
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  }
  startWith(word: string, node = this.root): boolean {
    if (word.length === 0) return true;
    else if (!node.keys[word[0]]) return false;
    else {
      return this.startWith(word.substring(1), node.keys[word[0]]);
    }
  }
}
