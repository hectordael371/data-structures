"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BNode_1 = require("../../Nodes/BNode/BNode");
var BST = /** @class */ (function () {
    function BST() {
        this._root = null;
        this._size = 0;
    }
    BST.prototype.insert = function (data) {
        if (this._root == null)
            this._root = new BNode_1.default(data, null, null);
        else
            this.recInsert(data, this._root);
        this._size += 1;
        this._root = this.balanceTree(this.inOrder(), 0, this._size - 1);
    };
    // If method is called, the tree is not empty.
    BST.prototype.recInsert = function (data, node) {
        if (data == node.data)
            throw new Error("Item already exists in BST.");
        else if (data > node.data) {
            if (node.right == null) {
                node.right = new BNode_1.default(data, null, null);
            }
            else {
                this.recInsert(data, node.right);
            }
        }
        // data < node.data
        else {
            if (node.left == null) {
                node.left = new BNode_1.default(data, null, null);
            }
            else {
                this.recInsert(data, node.left);
            }
        }
    };
    BST.prototype.balanceTree = function (nodes, start, end) {
        if (start > end)
            return null;
        var mid = Math.floor((start + end) / 2), node = nodes[mid];
        node.left = this.balanceTree(nodes, start, mid - 1);
        node.right = this.balanceTree(nodes, mid + 1, end);
        return node;
    };
    // Traversal methods assume tree is not empty.
    BST.prototype.preOrder = function () {
        return this.addPreOrder(this._root, []);
    };
    BST.prototype.addPreOrder = function (node, arr) {
        arr.push(node);
        if (node.left != null)
            this.addPreOrder(node.left, arr);
        if (node.right != null)
            this.addPreOrder(node.right, arr);
        return arr;
    };
    BST.prototype.inOrder = function () {
        return this.addInOrder(this._root, []);
    };
    BST.prototype.addInOrder = function (node, arr) {
        if (node.left != null)
            this.addInOrder(node.left, arr);
        arr.push(node);
        if (node.right != null)
            this.addInOrder(node.right, arr);
        return arr;
    };
    BST.prototype.postOrder = function () {
        return this.addPostOrder(this._root, []);
    };
    BST.prototype.addPostOrder = function (node, arr) {
        if (node.left != null)
            this.addPostOrder(node.left, arr);
        if (node.right != null)
            this.addPostOrder(node.right, arr);
        arr.push(node);
        return arr;
    };
    BST.prototype.breadthFirst = function () {
        return this.addBreadthFirst(this._root, []);
    };
    BST.prototype.addBreadthFirst = function (node, arr) {
        if (node == null)
            return arr;
        var queue = [];
        queue.push(node);
        while (queue.length > 0) {
            node = queue.shift();
            arr.push(node);
            if (node.left != null)
                queue.push(node.left);
            if (node.right != null)
                queue.push(node.right);
        }
        return arr;
    };
    BST.prototype.depthFirst = function () {
        return;
    };
    BST.prototype.size = function () {
        return this._size;
    };
    BST.prototype.isEmpty = function () {
        return this._size == 0;
    };
    BST.prototype.depth = function () {
        return this.maxDepth(this._root);
    };
    BST.prototype.maxDepth = function (node) {
        if (node == null)
            return 0;
        else
            return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
    };
    BST.prototype.clone = function () {
        throw new Error("Method not implemented.");
    };
    BST.prototype.clear = function () {
        if (this._size == 0)
            return;
        var arr = this.inOrder();
        arr.map(function (node) {
            node = node.left = node.right = node.data = null;
        });
        this._root = null;
        this._size = 0;
    };
    BST.prototype.toArray = function (order) {
        if (this.isEmpty())
            return [];
        var arr;
        switch (order) {
            case "pre-order":
                arr = this.preOrder();
                break;
            case "in-order":
                arr = this.inOrder();
                break;
            case "post-order":
                arr = this.postOrder();
                break;
            case "level-order":
                arr = this.breadthFirst();
                break;
            default:
                throw new Error("Invalid traversal.");
        }
        return arr.map(function (node) { return node.data; });
    };
    return BST;
}());
exports.default = BST;
var bst = new BST();
console.log(bst.toArray("in-order"));
console.log(bst.size() == 0);
console.log(bst.isEmpty());
bst.insert(3);
bst.insert(0);
bst.insert(7);
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(4);
bst.insert(21);
bst.insert(25);
bst.insert(30);
// console.log(bst.size())
console.log(bst.toArray("in-order"));
console.log(bst.toArray("pre-order"));
console.log(bst.toArray("post-order"));
console.log(bst.toArray("level-order"));
console.log(bst.breadthFirst());
console.log(bst.depth());
