/**Graph
 * a graph data structure consists of finite
 * (and possibly mutable) set of varieties or
 * nodes or points, together with a set of unordered
 * pairs of these vertices for an undirected graph
 * or a set of ordered pairs for a directed graph
 *
 * in simple word graph is collection of node
 * with unordered direction
 */
/**Type of Graph
 * -->Essential Graph terms
 * - Vertex => a node
 * - Edge =>connection between nodes
 * - weighted/unweighted => values assigned to distances
 * - Directed/Undirected => Direction assigned to distanced
 *   between vertices
 */
/**Storing Graphs: Adjacency
 * Adjacency is the way we store node and the node connection
 * we use the node as an index or the key and the connection as a
 * value
 */
/** Adjacency List vs Adjacency Matrix
 * => Adjacency Lists
 * - Can take up less space (In sparse graphs)
 * - Faster to iterate over all edges
 * - can be slower to look up specific edge
 * => Adjacency Matrix
 * - Take up more space (in sparse graphs)
 * - Slower to iterate over all edges
 * - faster to look up specific edge
 */
export class Graph {
  public adjecencylist: Record<string, string[]> = {};
  addVertex(vertex: string) {
    const { adjecencylist } = this;
    if (!adjecencylist[vertex]) adjecencylist[vertex] = [];
    return this;
  }
  addEdge(mainVertex: string, rangeVertex: string) {
    const { adjecencylist } = this;
    if (!adjecencylist[mainVertex])
      throw new Error(`${mainVertex} vertex is not found`);
    else if (!adjecencylist[rangeVertex])
      throw new Error(`${rangeVertex} vertex is not found`);
    adjecencylist[mainVertex].push(rangeVertex);
    adjecencylist[rangeVertex].push(mainVertex);
    return this;
  }
  removeVertex(vertex: string) {
    const { adjecencylist } = this;
    if (!adjecencylist[vertex])
      throw new Error(`${vertex} vertex is not found`);
    delete adjecencylist[vertex];
    for (let vrtx in adjecencylist) {
      adjecencylist[vrtx].forEach((range, idx) => {
        if (range === vertex) {
          adjecencylist[vrtx].splice(idx, 1);
        }
      });
    }
  }
  graphConnection(vertex: string) {
    return depthFirstTraversal(vertex, this.adjecencylist);
  }
  graphConnectionIterative(vertex: string) {
    return depthFirstIterative(vertex, this.adjecencylist);
  }
  graphConnectionBFSIterative(vertex: string) {
    return BreadFirstSearch(vertex, this.adjecencylist);
  }
}
/**Depth First Traversal
 * recursive
 */
export function depthFirstTraversal(
  vertex: string,
  graph: Record<string, string[]>,
  connection: string[] = [],
  visited: Record<string, boolean> = {}
) {
  if (!vertex) return null;
  visited[vertex] = true;
  connection.push(vertex);
  graph[vertex].forEach((range) => {
    if (!visited[range]) depthFirstTraversal(range, graph, connection, visited);
  });
  return connection;
}
/**Depth First Traversal
 * iterative
 */
export function depthFirstIterative(
  vertex: string,
  graph: Record<string, string[]>
) {
  let stack = [],
    visited: Record<string, boolean> = {},
    connection: string[] = [];
  stack.push(vertex);
  while (stack.length) {
    let vertexNode = stack.pop()!;
    if (!visited[vertexNode]) {
      visited[vertexNode] = true;
      connection.push(vertexNode);
      graph[vertexNode].forEach((range) => stack.push(range));
    }
  }
  return connection;
}
/**Breadth First Search
 * - This function should accept a string vertex
 * - Create a queue (you can use an array) and place the string vertex in it
 * - Create an object to store node visited
 * - Marking the string as visited
 * - Loop as long as there is anything in the queue
 * - Remove the first vertex from the queue and push it into the array that stores node visited
 * - if it is no inside the object that nodes visited, mark it as visited and enqueue that vertex
 * - Once you have finished looping, return the array of visited nodes
 */
export function BreadFirstSearch(
  vertex: string,
  graph: Record<string, string[]>
) {
  let stack = [];
  let visited: Record<string, boolean> = {};
  let connection: string[] = [];
  stack.push(vertex);
  visited[vertex] = true;
  while (stack.length) {
    let vertexNode = stack.shift()!;
    connection.push(vertexNode);
    graph[vertexNode].forEach((range) => {
      if (!visited[range]) {
        visited[range] = true;
        stack.push(range);
      }
    });
  }
  return connection;
}
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
 * - create an object ( well call it distances) and set each
 *   to be every vertex in the adjacency list with a value of
 *   infinity ,except  for the staring vertex which
 *   should have a value a 0
 * - after setting a value in the distances object, add each
 *   vertex  with a priority of infinity to the priority queue,
 *   except the staring vertex , which should have a priority 0
 *   because that where we beginning
 * - create another object called previous and set each to be
 *   every vertex  in the adjacency list with a value of null
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
    return path.concat(startVertex).reverse();
  }
  Dijkstrasec(verteStart: string, vertexFinis: string) {
    const node = new PriorityQueue();
    const distance: Record<string, number> = {};
    const previous: Record<string, null | string> = {};
    let smalles: string;
    let path = [];
    for (let vertext in this.adjecencylist) {
      if (vertext === verteStart) {
        distance[verteStart] = 0;
        node.enqueue(vertext, 0);
      } else {
        distance[vertext] = Infinity;
        node.enqueue(vertext, Infinity);
      }
      previous[vertext] = null;
    }
    while (node.values.length) {
      smalles = node.dequeue()!.value;
      if (smalles === vertexFinis) {
        while (previous[smalles]) {
          path.push(smalles);
          smalles = previous[smalles]!;
        }
        break;
      }
      if (smalles || distance[smalles] !== Infinity) {
        for (let range in this.adjecencylist[smalles]) {
          let nextNode = this.adjecencylist[smalles][range];
          let candidate = distance[smalles] + nextNode.weight;
          if (candidate < distance[nextNode.node]) {
            distance[nextNode.node] = candidate;
            previous[nextNode.node] = smalles;
            node.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    console.log(path);
    return path.concat(verteStart).reverse();
  }
}
/**Simple priority queue
 *
 */

interface Nodes {
  value: string;
  priority: number;
}
class PriorityQueue {
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
