export class Trie {
  public characters: Record<string, Trie> = {};
  public isWord = false;

  addWord(word: string, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      var char = word[index];
      var subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }

  // findWord(word: string, index = 0): Trie {
  //   // This function will return the node in the trie
  //   // which corresponds to the end of the passed in word.

  //   // Be sure to consider what happens if the word is not in this Trie.

  //   var char = word[index];
  //   if (index < word.length - 1 && this.characters[char]) {
  //     index += 1;
  //     return this.characters[char].findWord(word, index);
  //   } else {
  //     return this.characters[char];
  //   }
  // }
  getWords(words: string[] = [], currentWord = "") {
    // This function will return all the words which are
    // contained in this Trie.
    // it will use currentWord as a prefix,
    // since a Trie doesn't know about its parents.

    if (this.isWord) {
      words.push(currentWord);
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char;
      this.characters[char].getWords(words, nextWord);
    }
    return words;
  }
  autoComplete(prefix: string) {
    // This function will return all completions
    // for a given prefix.
    // It should use find and getWords.
    var subTrie = this.findWord(prefix);
    if (subTrie) {
      return subTrie.getWords([], prefix);
    } else {
      return [];
    }
  }
  removeWord(word: string, index = 0, branch = "", node: Trie = this) {
    if (word.length === index) {
      node.isWord = false;
      if (Object.keys(node.characters).length < 1) {
        this.deleteBranch(branch);
      }
      return this;
    }
    if (Object.keys(node.characters).length > 1) {
      branch = branch + word[index];
    }
    this.removeWord(word, index + 1, branch, node.characters[word[index]]);
  }
  deleteBranch(branch: string, index = 0, node: Trie = this) {
    if (branch.length - 1 === index) {
      delete node.characters[branch[index]];
      return this;
    }
    this.deleteBranch(branch, index + 1, node.characters[branch[index]]);
  }
  findWord(word: string, index = 0, node: Trie = this): Trie | undefined {
    if (index > word.length) return;
    if (index === word.length - 1) {
      return node.characters[word[index]];
    }
    return this.findWord(word, index + 1, node.characters[word[index]]);
  }
  // getWords(node: Trie = this, branch = "", list: string[] = []) {
  //   if (!node) return list;
  //   if (Object.keys(node.characters)[0]) {
  //     branch = branch + Object.keys(node.characters)[0];
  //   }
  //   if (node.isWord) {
  //     list.push(branch);
  //   }
  //   let NextNode = Object.values(node.characters);
  //   for (let i = 0; i < NextNode.length; i++) {
  //     this.getWords(NextNode[i], branch, list);
  //   }
  //   return list;
  // }
}
