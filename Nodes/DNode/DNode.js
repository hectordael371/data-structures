"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DNode = /** @class */ (function () {
    function DNode(data, next, prev) {
        this._data = data;
        this._next = next;
        this._prev = prev;
    }
    Object.defineProperty(DNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DNode.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        set: function (prev) {
            this._prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: false,
        configurable: true
    });
    return DNode;
}());
exports.default = DNode;
