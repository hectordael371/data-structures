"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SinglyLinkedList_1 = require("../LinkedLists/SinglyLinkedList/SinglyLinkedList");
var Stack = /** @class */ (function () {
    function Stack() {
        this._stack = new SinglyLinkedList_1.default();
    }
    Stack.prototype.push = function (element) {
        this._stack.addFirst(element);
    };
    Stack.prototype.top = function () {
        if (this._stack.isEmpty())
            throw new Error('Stack is empty.');
        return this._stack.getFirst();
    };
    Stack.prototype.pop = function () {
        if (this._stack.isEmpty())
            throw new Error('Stack is empty.');
        return this._stack.removeFirst();
    };
    Stack.prototype.size = function () {
        return this._stack.size();
    };
    Stack.prototype.isEmpty = function () {
        return this._stack.isEmpty();
    };
    Stack.prototype.clear = function () {
        this._stack.clear();
    };
    Stack.prototype.clone = function () {
        var clone = new Stack(), elements = this._stack.reverseList();
        while (!elements.isEmpty())
            clone.push(elements.removeFirst());
        return clone;
    };
    Stack.prototype.toArray = function () {
        return this._stack.toArray();
    };
    return Stack;
}());
exports.default = Stack;
var stack = new Stack();
stack.push(2);
stack.push("this");
stack.push(true);
var clone = stack.clone();
console.log(stack.toArray());
console.log(clone.toArray());
// stack.pop();
// console.log(stack.pop())
console.log(stack.toArray());
console.log(clone.toArray());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());
