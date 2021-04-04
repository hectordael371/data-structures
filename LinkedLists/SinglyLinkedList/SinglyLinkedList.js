"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SNode_1 = require("../../Nodes/SNode/SNode");
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this._header = new SNode_1.default(null, null);
        this._size = 0;
    }
    SinglyLinkedList.prototype.size = function () {
        return this._size;
    };
    SinglyLinkedList.prototype.isEmpty = function () {
        return this._size == 0;
    };
    SinglyLinkedList.prototype.add = function (index, element) {
        if (index < 0 || index > this._size || index == null)
            throw new Error("Invalid index.");
        var current = this._header;
        while (index > 0) {
            current = current.next;
            index -= 1;
        }
        var nta = new SNode_1.default(element, current.next);
        current.next = nta;
        this._size += 1;
    };
    SinglyLinkedList.prototype.addFirst = function (element) {
        this._header.next = new SNode_1.default(element, this._header.next);
        this._size += 1;
    };
    SinglyLinkedList.prototype.addLast = function (element) {
        this.recursiveAddLast(this._header, element);
    };
    SinglyLinkedList.prototype.recursiveAddLast = function (current, element) {
        if (current.next == null) {
            current.next = new SNode_1.default(element, null);
            this._size += 1;
        }
        else
            return this.recursiveAddLast(current.next, element);
    };
    SinglyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this._size || index == null)
            throw new Error('Invalid index.');
        var current = this._header;
        while (index >= 0) {
            current = current.next;
            index -= 1;
        }
        return current.data;
    };
    SinglyLinkedList.prototype.getFirst = function () {
        if (this._size == 0)
            throw new Error("List is empty.");
        return this._header.next.data;
    };
    SinglyLinkedList.prototype.getLast = function () {
        if (this._size == 0)
            throw new Error('List is empty.');
        return this.recursiveGetLast(this._header);
    };
    SinglyLinkedList.prototype.recursiveGetLast = function (current) {
        if (current.next == null)
            return current.data;
        else
            return this.recursiveGetLast(current.next);
    };
    SinglyLinkedList.prototype.set = function (index, element) {
        if (this._size == 0)
            throw new Error("List is empty.");
        else if (index < 0 || index >= this._size || index == null)
            throw new Error("Invalid index.");
        var current = this._header;
        while (index >= 0) {
            current = current.next;
            index -= 1;
        }
        current.data = element;
    };
    SinglyLinkedList.prototype.setFirst = function (element) {
        if (this._size == 0)
            throw new Error("List is empty.");
        this._header.next.data = element;
    };
    SinglyLinkedList.prototype.setLast = function (element) {
        if (this._size == 0)
            throw new Error("List is empty.");
        this.recursiveSetLast(this._header, element);
    };
    SinglyLinkedList.prototype.recursiveSetLast = function (current, element) {
        if (current.next == null)
            current.data = element;
        else
            this.recursiveSetLast(current.next, element);
    };
    SinglyLinkedList.prototype.remove = function (index) {
        if (this.isEmpty())
            throw new Error('List is empty.');
        else if (index < 0 || index >= this.size() || index == null)
            throw new Error('Invalid index.');
        var current = this._header;
        while (index > 0) {
            current = current.next;
            index -= 1;
        }
        var ntr = current.next, etr = ntr.data;
        current.next = ntr.next;
        this._size -= 1;
        ntr.data = ntr.next = null;
        return etr;
    };
    SinglyLinkedList.prototype.removeFirst = function () {
        if (this._size == 0)
            throw new Error("List is empty.");
        var ntr = this._header.next, etr = ntr.data;
        this._header.next = ntr.next;
        ntr.data = ntr.next = null;
        this._size -= 1;
        return etr;
    };
    SinglyLinkedList.prototype.removeLast = function () {
        return this.recursiveRemoveLast(this._header);
    };
    SinglyLinkedList.prototype.recursiveRemoveLast = function (current) {
        if (current.next.next == null) {
            var ntr = current.next, etr = ntr.data;
            current.next = ntr.data = null;
            this._size -= 1;
            return etr;
        }
        else
            return this.recursiveRemoveLast(current.next);
    };
    SinglyLinkedList.prototype.clear = function () {
        this.recursiveClear(this._header);
        this._size = 0;
    };
    SinglyLinkedList.prototype.recursiveClear = function (current) {
        if (current.next == null)
            return null;
        current.data = current.next = this.recursiveClear(current.next);
    };
    SinglyLinkedList.prototype.clone = function () {
        return this.recursiveClone(this._header.next, new SinglyLinkedList());
    };
    SinglyLinkedList.prototype.recursiveClone = function (current, clone) {
        if (current.next != null)
            this.recursiveClone(current.next, clone);
        clone.addFirst(current.data);
        return clone;
    };
    SinglyLinkedList.prototype.toArray = function () {
        var current = this._header.next;
        return this.recursiveToArray(current, []);
    };
    SinglyLinkedList.prototype.recursiveToArray = function (current, list) {
        if (current == null)
            return list;
        else {
            list.push(current.data);
            return this.recursiveToArray(current.next, list);
        }
    };
    SinglyLinkedList.prototype.reverseList = function () {
        return this.recursiveReverse(this._header.next, new SinglyLinkedList());
    };
    SinglyLinkedList.prototype.recursiveReverse = function (current, list) {
        list.addFirst(current.data);
        if (current.next != null)
            this.recursiveReverse(current.next, list);
        return list;
    };
    return SinglyLinkedList;
}());
exports.default = SinglyLinkedList;
// let list = new SinglyLinkedList();
// list.add(0, 2);
// list.add(1, "this");
// list.add(1, true);
// list.add(2, "NewElement")
// list.addFirst("another");
// list.addLast("one");
// list.setFirst("first");
// list.setLast("last");
// list.set(list.size() -1, 3);
// console.log(list.getLast())
// console.log(list.getFirst())
// console.log(list.get(list.size() -1))
// list.clear();
// console.log(list.remove(list.size() -1))
// console.log(list.clone().toArray())
// console.log(list.toArray())
// console.log(list.reverseList().toArray())
// console.log(list.removeLast())
// console.log(list.toArray())
// console.log(list.removeLast())
// console.log(list.removeFirst())
