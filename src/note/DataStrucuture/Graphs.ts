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
  connection.push(`(${vertex})->`);
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
      connection.push(`(${vertexNode})->`);
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
    connection.push(`(${vertexNode})->`);
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
