
export class Graph {
    numberOfNodes:number=0
    adjacentList:{[node:string]:(number|null)[]}={}
    constructor() {}
    addVertex(node:number) {
        this.adjacentList[node.toLocaleString()]= [];
        this.numberOfNodes++;
    }
    addEdge(node1:number, node2:number) {
      //undirected Graph
     this.adjacentList[node1.toLocaleString()].push(node1);
     this.adjacentList[node2.toLocaleString()].push(node2);
    }
    showConnections() {
      const allNodes = Object.keys(this.adjacentList);
      for (let node of allNodes) {
        let nodeConnections = this.adjacentList[node];
        let connections = "";
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        }
        console.log(node + "-->" + connections);
      }
    }
    inserNodeKey(node:number){
        return this.adjacentList[node.toLocaleString()]
    }
  }