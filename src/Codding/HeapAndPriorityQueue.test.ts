import { describe, it, beforeEach } from "vitest";
import { Heaps } from "./HeapsAndPriorityQueue";
describe("component ", () => {
  let suit: Heaps;
  beforeEach(() => {
    suit = new Heaps();
  });
  it(" first test", () => {
    suit.insertMuch([75, 50, 25, 45, 35, 10, 15, 20, 40]);
    suit.extractValue();
    // suit.extractValue();
    console.log(suit.heaps);
  });
  it(" first test", () => {
    suit.insertMuch([10, 9, 9, 8, 8, 8, 8]);
    // suit.extractValue();
    // suit.extractValue();
    console.log(suit.heaps);
  });
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
/** Priority queue
 *
 */

// const pq = new PriorityQueue();
// pq.push(15);
// pq.push(12);
// pq.push(50);
// pq.push(7);
// pq.push(40);
// pq.push(22);

// while (!pq.isEmpty()) {
//   console.log(pq.pop());
// }
