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

  remove(data) {
    this.root = removePoint(this.broot, data);

    function removePoint(point, data) {
      if (!point) { return null }

      if (data < point.data) {
        point.left = removePoint(point.left, data)
        // continue search
        return point
      }
      if (data > point.data) {
        point.right = removePoint(point.right, data)
        // continue search
        return point
      }
      {
        if (!point.left && !point.right) {
          return point = null
        }

        if (!point.left) {
          point = point.right
          return point

        }
        // пробовал через else if, но потом допер, что агаааа. оно может остановиться не там! Надо еще одно дерево написать бы. или 2? на работе займусь))
        if (!point.right) {
          point = point.left
          return point
        }
        // если есть оба потомка. жоска. Ищем максимальный левый. Я так хочу!

        // ебать путаница.
        let maxLeft = point.left
        while (maxLeft.right) {
          maxLeft = maxLeft.right
        }

        point.data = maxLeft.data
        point.left = removePoint(point.left, maxLeft.data)

        return point

      }

    }

  }

  min() {

    if (!this.broot) {
      // console.log('no way');
      return null
    }

    // console.log('here??');
    let point = this.broot

    while (point.left) {
      point = point.left
    }

    // console.log(point.data)
    return point.data
  }

  max() {
    if (!this.broot) {
      // console.log('no way');
      return null
    }

    // console.log('here??');
    let point = this.broot

    while (point.right) {
      point = point.right
    }

    // console.log(point.data)
    return point.data
  }
}
const myTree = new BinarySearchTree();
myTree.add(9);
myTree.add(14);
myTree.add(54);
myTree.add(2);
myTree.add(6);
myTree.add(8);
myTree.add(31);
myTree.add(1);
// myTree.remove(6);
// myTree.remove(2);
console.log(myTree.max());






module.exports = {
  BinarySearchTree
};