"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DNode_1 = require("../../Nodes/DNode/DNode");
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this._header = new DNode_1.default(null, null, null);
        this._trailer = new DNode_1.default(null, null, this._header);
        this._header.next = this._trailer;
        this._size = 0;
    }
    DoublyLinkedList.prototype.getNode = function (index) {
        var ntr;
        // Start at the end of the list.
        if (index > this._size / 2) {
            index = this._size - index;
            ntr = this._trailer;
            while (index >= 0) {
                ntr = ntr.prev;
                index -= 1;
            }
        }
        // index < this.size / 2
        else {
            // Start at the beginning of the list.
            ntr = this._header;
            while (index > 0) {
                ntr = ntr.next;
                index -= 1;
            }
        }
        return ntr;
    };
    DoublyLinkedList.prototype.isEmpty = function () {
        return this._size == 0;
    };
    DoublyLinkedList.prototype.size = function () {
        return this._size;
    };
    DoublyLinkedList.prototype.add = function (index, element) {
        if (index > this._size || index < 0 || index == null)
            throw new Error("Invalid index.");
        var nta;
        if (this._size == 0) {
            nta = new DNode_1.default(element, this._trailer, this._header);
            this._header.next = nta;
            this._trailer.prev = nta;
        }
        else {
            var current = this.getNode(index);
            nta = new DNode_1.default(element, current.next, current);
            current.next.prev = nta;
            current.next = nta;
        }
        this._size += 1;
    };
    DoublyLinkedList.prototype.addFirst = function (element) {
        this.add(0, element);
    };
    DoublyLinkedList.prototype.addLast = function (element) {
        this.add(this._size, element);
    };
    DoublyLinkedList.prototype.get = function (index) {
        if (this._size == 0)
            throw new Error("List is empty.");
        else if (index >= this._size || index < 0 || index == null)
            throw new Error("Invalid index.");
        // index + 1 to get the actual node holding the element to read.
        var current = this.getNode(index + 1);
        return current.data;
    };
    DoublyLinkedList.prototype.getFirst = function () {
        if (this._size == 0)
            throw new Error("List is empty.");
        return this._header.next.data;
    };
    DoublyLinkedList.prototype.getLast = function () {
        if (this._size == 0)
            throw new Error("List is empty.");
        return this._trailer.prev.data;
    };
    DoublyLinkedList.prototype.set = function (index, element) {
        if (this._size == 0)
            throw new Error("List is empty.");
        else if (index >= this._size || index < 0 || index == null)
            throw new Error("Invalid index.");
        // index + 1 to get the actual node holding the element to modify.
        var current = this.getNode(index + 1);
        current.data = element;
    };
    DoublyLinkedList.prototype.setFirst = function (element) {
        this.set(0, element);
    };
    DoublyLinkedList.prototype.setLast = function (element) {
        this.set(this._size - 1, element);
    };
    DoublyLinkedList.prototype.remove = function (index) {
        if (this._size == 0)
            throw new Error("List is empty.");
        else if (index >= this._size || index < 0 || index == null)
            throw new Error("Invalid index.");
        var ntr;
        if (this._size == 1) {
            ntr = this._header.next;
            this._header.next = this._trailer;
            this._trailer.prev = this._header;
        }
        else {
            ntr = this.getNode(index + 1);
            // Make next and prev reference each other.
            ntr.prev.next = ntr.next;
            ntr.next.prev = ntr.prev;
        }
        // Save element to return & nullify node to remove.
        var etr = ntr.data;
        ntr.next = ntr.prev = ntr.data = null;
        this._size -= 1;
        return etr;
    };
    DoublyLinkedList.prototype.removeFirst = function () {
        return this.remove(0);
    };
    DoublyLinkedList.prototype.removeLast = function () {
        return this.remove(this._size - 1);
    };
    DoublyLinkedList.prototype.clear = function () {
        var current = this._header;
        for (var i = 0; i < this._size; i++) {
            current = current.next;
            current.prev = current.prev.next = current.data = null;
        }
        this._header.next = this._trailer;
        this._trailer.prev = this._header;
        this._size = 0;
    };
    DoublyLinkedList.prototype.clone = function () {
        var list = new DoublyLinkedList(), current = this._header;
        for (var i = 0; i < this._size; i++) {
            current = current.next;
            list.addLast(current.data);
        }
        return list;
    };
    DoublyLinkedList.prototype.toArray = function () {
        var current = this._header.next, list = [];
        while (current != this._trailer) {
            list.push(current.data);
            current = current.next;
        }
        return list;
    };
    return DoublyLinkedList;
}());
exports.default = DoublyLinkedList;
// let list = new DoublyLinkedList();
// list.add(0, "string1");
// list.add(1, "string2");
// list.addFirst("string3");
// list.addLast("string4");
// list.setFirst("string5");
// list.setLast("string6");
// console.log(list.getFirst());
// console.log(list.getLast());
// list.remove(1);
// list.removeFirst();
// list.removeLast();
// let clone = list.clone();
// list.clear();
// console.log(list.toArray())
// console.log(clone.toArray())
