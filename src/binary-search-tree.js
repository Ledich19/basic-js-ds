const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.three = null;
  }

  root() {
    return this.three;
    // remove line with error and write your code here
  }

  add(data) {
    this.three = addLeaf(this.three, data);

    function addLeaf(node, data) {
      if (!node) {
        return {
          data: data,
          left: null,
          right: null,
        };
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node.left = addLeaf(node.left, data);
      } else {
        node.right = addLeaf(node.right, data);
      }
      return node;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return hasData(this.three, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else {
        if (data < node.data) {
          return hasData(node.left, data);
        } else {
          return hasData(node.right, data);
        }
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    return findData(this.three, data);

    function findData(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else {
        if (data < node.data) {
          return findData(node.left, data);
        } else {
          return findData(node.right, data);
        }
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    this.three = removeLeaf(this.three, data);

    function removeLeaf(node, data) {
      if (!node) {
        return null;
      } else if (node.data < data) {
        node.right = removeLeaf(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeLeaf(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeLeaf(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if (!this.three) {
      return;
    }
    let node = this.three;
    while (node.left) {
      node = node.left;
    }
    return node.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.three) {
      return;
    }
    let node = this.three;
    while (node.right) {
      node = node.right;
    }
    return node.data;
    // remove line with error and write your code here
  }
}
module.exports = {
  BinarySearchTree,
};
