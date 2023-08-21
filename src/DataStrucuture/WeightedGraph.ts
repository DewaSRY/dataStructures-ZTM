/**Dijkstra algorithms
 * One of the most famous and widely used algorithms around
 * Finds the shortest path between two vertices on a graph
 */
/**Why is it useful
 * - GPS - finding fastest route
 * - Network Routing - fonds open shorts path for data
 * - Biology used to model the spread if viruses among humans
 * - Airline tickets - finding cheapest route to your destination
 * - and other else
 */
/**Dijkstra's
 * - This function should accept a string and ending vertex
 * - create an object ( well call it distances) and set each to be every vertex in the adjacency list with a value of infinity , except  for the staring vertex which should have a value a 0
 * - after setting a value in the distances object, add each vertex  with a priority of infinity to the priority queue, except the staring vertex , which should have a priority 0 because that where we beginning
 * - create another object called previous and set each to be every vertex  in the adjacency list with a value of null
 * - start looping as long as there is anything in the priority queue
 * => dequeue a vertex from the priority queue i
 * => if that vertex is the same as the ending vertex- we are done
 * => otherwise loop through each values in the adjacency list at the vertex
 *   -Calculate the distance to that vertex from the staring vertex
 *   - if the distance is less then what is currently stored in out distances object
 *   - update the distance object with ne lower distance
 *   - update the previous object to contains that vertex
 *   - enqueue the vertex with the total distance from the start node
 */
interface vertex {
  node: string;
  weight: number;
}
export class WeightedGraph {
  public adjecencylist: Record<string, vertex[]> = {};
  addVertex(vertex: string) {
    const { adjecencylist } = this;
    if (!adjecencylist[vertex]) adjecencylist[vertex] = [];
    return this;
  }
  addEdge(mainVertex: string, rangeVertex: string, weight: number) {
    const { adjecencylist } = this;
    if (!adjecencylist[mainVertex])
      throw new Error(`${mainVertex} vertex is not found`);
    else if (!adjecencylist[rangeVertex])
      throw new Error(`${rangeVertex} vertex is not found`);
    adjecencylist[mainVertex].push({ node: rangeVertex, weight });
    adjecencylist[rangeVertex].push({ node: mainVertex, weight });
    return this;
  }
  removeVertex(vertex: string) {
    const { adjecencylist } = this;
    if (!adjecencylist[vertex])
      throw new Error(`${vertex} vertex is not found`);
    delete adjecencylist[vertex];
    for (let vrtx in adjecencylist) {
      adjecencylist[vrtx].forEach((range, idx) => {
        if (range.node === vertex) {
          adjecencylist[vrtx].splice(idx, 1);
        }
      });
    }
  }
  Dijkstra(startVertex: string, finishVertex: string) {
    const node = new PriorityQueue();
    const distance: Record<string, number> = {};
    const previous: Record<string, null | string> = {};
    let path: string[] | null = [];
    let smalls: string;
    // build Up initial state
    for (let vortex in this.adjecencylist) {
      if (vortex === startVertex) {
        distance[vortex] = 0;
        node.enqueue(vortex, 0);
      } else {
        distance[vortex] = Infinity;
        node.enqueue(vortex, Infinity);
      }
      previous[vortex] = null;
    }
    //as long as there
    while (node.values.length) {
      smalls = node.dequeue()?.value!;
      if (smalls === finishVertex) {
        //done
        while (previous[smalls]) {
          path.push(smalls);
          smalls = previous[smalls]!;
        }
        break;
      }
      if (smalls || distance[smalls] !== Infinity) {
        for (let range in this.adjecencylist[smalls]) {
          let nextNode = this.adjecencylist[smalls][range];
          let candidate = distance[smalls] + nextNode.weight;
          if (candidate < distance[nextNode.node]) {
            //updating smalls distance to neighbor
            distance[nextNode.node] = candidate;
            //updating previous  - how we got to nest
            previous[nextNode.node] = smalls;
            //enqueue in priority queue with new priority
            node.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(`(${startVertex}})->`).reverse();
  }
}
/**Simple priority queue
 *
 */
interface Nodes {
  value: string;
  priority: number;
}
export class PriorityQueue {
  public values: Nodes[] = [];
  enqueue(value: string, priority: number) {
    this.values.push({ value, priority });
    this.sort();
    return this;
  }
  dequeue() {
    if (this.values) return this.values.shift();
    else return null;
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// class WeightedGraph {
//   constructor() {
//       this.adjacencyList = {};
//   }
//   addVertex(vertex){
//       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//   }
//   addEdge(vertex1,vertex2, weight){
//       this.adjacencyList[vertex1].push({node:vertex2,weight});
//       this.adjacencyList[vertex2].push({node:vertex1, weight});
//   }
//   Dijkstra(start, finish){
//       const nodes = new PriorityQueue();
//       const distances = {};
//       const previous = {};
//       let path = [] //to return at end
//       let smallest;
//       //build up initial state
//       for(let vertex in this.adjacencyList){
//           if(vertex === start){
//               distances[vertex] = 0;
//               nodes.enqueue(vertex, 0);
//           } else {
//               distances[vertex] = Infinity;
//               nodes.enqueue(vertex, Infinity);
//           }
//           previous[vertex] = null;
//       }
//       // as long as there is something to visit
//       while(nodes.values.length){
//           smallest = nodes.dequeue().val;
//           if(smallest === finish){
//               //WE ARE DONE
//               //BUILD UP PATH TO RETURN AT END
//               while(previous[smallest]){
//                   path.push(smallest);
//                   smallest = previous[smallest];
//               }
//               break;
//           }
//           if(smallest || distances[smallest] !== Infinity){
//               for(let neighbor in this.adjacencyList[smallest]){
//                   //find neighboring node
//                   let nextNode = this.adjacencyList[smallest][neighbor];
//                   //calculate new distance to neighboring node
//                   let candidate = distances[smallest] + nextNode.weight;
//                   let nextNeighbor = nextNode.node;
//                   if(candidate < distances[nextNeighbor]){
//                       //updating new smallest distance to neighbor
//                       distances[nextNeighbor] = candidate;
//                       //updating previous - How we got to neighbor
//                       previous[nextNeighbor] = smallest;
//                       //enqueue in priority queue with new priority
//                       nodes.enqueue(nextNeighbor, candidate);
//                   }
//               }
//           }
//       }
//       return path.concat(smallest).reverse();
//   }
// }

// class PriorityQueue {
//   constructor(){
//       this.values = [];
//   }
//   enqueue(val, priority){
//       let newNode = new Node(val, priority);
//       this.values.push(newNode);
//       this.bubbleUp();
//   }
//   bubbleUp(){
//       let idx = this.values.length - 1;
//       const element = this.values[idx];
//       while(idx > 0){
//           let parentIdx = Math.floor((idx - 1)/2);
//           let parent = this.values[parentIdx];
//           if(element.priority >= parent.priority) break;
//           this.values[parentIdx] = element;
//           this.values[idx] = parent;
//           idx = parentIdx;
//       }
//   }
//   dequeue(){
//       const min = this.values[0];
//       const end = this.values.pop();
//       if(this.values.length > 0){
//           this.values[0] = end;
//           this.sinkDown();
//       }
//       return min;
//   }
//   sinkDown(){
//       let idx = 0;
//       const length = this.values.length;
//       const element = this.values[0];
//       while(true){
//           let leftChildIdx = 2 * idx + 1;
//           let rightChildIdx = 2 * idx + 2;
//           let leftChild,rightChild;
//           let swap = null;

//           if(leftChildIdx < length){
//               leftChild = this.values[leftChildIdx];
//               if(leftChild.priority < element.priority) {
//                   swap = leftChildIdx;
//               }
//           }
//           if(rightChildIdx < length){
//               rightChild = this.values[rightChildIdx];
//               if(
//                   (swap === null && rightChild.priority < element.priority) ||
//                   (swap !== null && rightChild.priority < leftChild.priority)
//               ) {
//                  swap = rightChildIdx;
//               }
//           }
//           if(swap === null) break;
//           this.values[idx] = this.values[swap];
//           this.values[swap] = element;
//           idx = swap;
//       }
//   }
// }

// class Node {
//   constructor(val, priority){
//       this.val = val;
//       this.priority = priority;
//   }
// }

// var graph = new WeightedGraph()
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A","B", 4);
// graph.addEdge("A","C", 2);
// graph.addEdge("B","E", 3);
// graph.addEdge("C","D", 2);
// graph.addEdge("C","F", 4);
// graph.addEdge("D","E", 3);
// graph.addEdge("D","F", 1);
// graph.addEdge("E","F", 1);

// graph.Dijkstra("A", "E");
