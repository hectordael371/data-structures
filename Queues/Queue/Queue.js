"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("../../LinkedLists/DoublyLinkedList/DoublyLinkedList");
var Queue = /** @class */ (function () {
    function Queue() {
        this._queue = new DoublyLinkedList_1.default();
    }
    Queue.prototype.enqueue = function (element) {
        this._queue.addLast(element);
    };
    Queue.prototype.peakFront = function () {
        if (this._queue.isEmpty())
            throw new Error("Queue is empty.");
        return this._queue.getFirst();
    };
    Queue.prototype.peakRear = function () {
        if (this._queue.isEmpty())
            throw new Error("Queue is empty.");
        return this._queue.getLast();
    };
    Queue.prototype.dequeue = function () {
        if (this._queue.isEmpty())
            throw new Error("Queue is empty.");
        return this._queue.removeFirst();
    };
    Queue.prototype.isEmpty = function () {
        return this._queue.isEmpty();
    };
    Queue.prototype.size = function () {
        return this._queue.size();
    };
    Queue.prototype.clear = function () {
        this._queue.clear();
    };
    Queue.prototype.clone = function () {
        var clone = new Queue(), elements = this._queue.clone();
        while (!elements.isEmpty())
            clone.enqueue(elements.removeFirst());
        return clone;
    };
    Queue.prototype.toArray = function () {
        return this._queue.toArray();
    };
    return Queue;
}());
exports.default = Queue;
var queue = new Queue();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
var clone = queue.clone();
queue.dequeue();
queue.dequeue();
console.log(queue.toArray());
console.log(clone.toArray());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(clone.size());
