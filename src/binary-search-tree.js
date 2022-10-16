const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Point {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.broot = null

  }

  root() {
    return this.broot
  }

  add(data) {

    this.broot = addInside(this.broot, data)

    function addInside(point, data) {
      if (!point) {
        return new Point(data);
      }
      if (point.data == data) {
        return point
      }

      if (data < point.data) {
        point.left = addInside(point.left, data)
      }
      else {
        point.right = addInside(point.right, data)
      }

      // Я ре понимаю этой инструкции, но без нее не работает
      return point
    }

  }

  has(data) {
    // console.log(this.broot);
    return hasData(this.broot, data)
    // myTree.broot.data
    function hasData(point, value) {
      // console.log('here we go');
      // console.log(point.data);

      if (!point) { return false }

      if (point.data == data) { return true }

      else if (point.data > data) {
        return hasData(point.left, data)
      }
      else if (point.data < data) {
        return hasData(point.right, data)
      }
      else {
        return false
      }
    }
  }

  find(data) {

    return findData(this.broot, data)

    function findData(point, value) {

      if (!point) { return null }

      if (point.data == data) {
        // console.log(point.data);
        return point
      }

      else if (point.data > data) {
        return findData(point.left, data)
      }
      else if (point.data < data) {
        return findData(point.right, data)
      }
      else {
        return point
      }

    }

  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.broot) { return null }

    while (this.broot.left) {
      this.broot = this.broot.left
    }
    return this.broot.left.data
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
const myTree = new BinarySearchTree();
myTree.add(2);
myTree.add(7);
myTree.add(1);
myTree.add(8);
myTree.add(4);
myTree.add(32);
myTree.add(12);
myTree.add(14);

myTree.find(7).data
// myTree.find(1337).data
myTree.find(32).data






module.exports = {
  BinarySearchTree
};