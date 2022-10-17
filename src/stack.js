const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arrStack = []
  }

  push(element) {

    /* 
      this.arrStack.reverse()
      this.arrStack.unshift(element)
      this.arrStack.reverse() 
      */

    /* this.arrStack[this.arrStack.length] = element */

    this.arrStack.unshift(element)
    return this.arrStack
  }

  pop() {
    if (this.arrStack == []) {
      return undefined
    }
    else {
      let popped = this.arrStack[0]
      this.arrStack.shift()
      return popped
    }
  }

  peek() {
    return this.arrStack[0]
  }
}
const stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.push(7);
// console.log(stack.pop());
// console.log(stack.arrStack);
module.exports = {
  Stack
};
