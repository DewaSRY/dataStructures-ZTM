export class Graph {
  numberOfNodes: number = 0;
  adjacentList: { [node: number]: unknown[] } = {};
  addVertex(node: number) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1: number, node2: number) {
    this.adjacentList[node1].push(node1);
    this.adjacentList[node2].push(node2);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[+node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
  insertNodeKey(node: number) {
    return this.adjacentList[node];
  }
}
