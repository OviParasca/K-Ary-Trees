'use strict';


class KAryNode {
  constructor(value = null) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend =  new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}

class KAryTree {
  constructor (root) {
    this.root = root;
  }

  breathFirstTraversal() {
    if (!this.root) {
      return null;
    }

    return this.breathFirstTraversalHelper(this.root);
  }

  breathFirstTraversalHelper(root) {

  }
}