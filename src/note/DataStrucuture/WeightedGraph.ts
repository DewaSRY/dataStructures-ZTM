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
}
