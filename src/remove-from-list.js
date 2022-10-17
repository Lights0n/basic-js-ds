const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 */
class ListNode {
  // кто гений с остандартным параметром??? ММ???
  constructor(x, next = null) {
    this.value = x;
    this.next = next;
  }

  /* addNode(value) {

    if (!this.value) {
      // console.log(this.value);
      this.value = value
      // console.log(this);
    }
    else {
      let current = this
      // console.log(current, 'WAA');
      while (current.next) {
        // console.log(current, 'nest here');
        current = this.next
      }
      // console.log(current, 'no more next');
      current.next = new ListNode(value)
      // console.log(current, 'YES?');
    }
  } */

}
/* const list = new ListNode()
console.log(list);
list.addNode(2)
list.addNode(3) */

/* function nodeFromArr(arr, node) {
  console.log(node);
  for (let el of arr) {
    // node
  }
  node = node.addNode(arr[1])
  console.log(node);
  // return node =  node.addNode(arr[0])

} */


function removeKFromList(l, k) {
  // console.log(arguments);
  // let revArr =[]
  // for (el of arguments[0] ){
  //   revArr.push(el)
  // }
  // revArr.reverse()
  // let cgratedNode = convertArrayToList(l)
  // let cgratedNode = convertArrayToList(revArr)
  // console.log(cgratedNode.next.next);

  // let currentRaw = cgratedNode
  let currentRaw = l
  // console.log(current);

  let current = delFirst(currentRaw)
  // pop if it first
  function delFirst(node) {
    if (node.value == k) {
      node = node.next
      return delFirst(node)
    }
    else {
      // console.log('else', node);
      return node
    }
  }

  let Head = current
    
  while (current.next) {
    // console.log(current.value);

    if (current.next.value == k) {
      // console.log(index, 'wtf');
      let del = current.next
      // console.log(current.next, '-----------dangerus');
      current.next = current.next.next
      // console.log(current.next, '------------------safe');
      continue
    }
    current = current.next

  }
  return Head;
}

/* function convertArrayToList(arr) {
  return arr.reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
} */


// console.log(removeKFromList([3, 1, 2, 3, 3, 4, 5], 3))
// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// console.log(initial);


module.exports = {
  removeKFromList
};
