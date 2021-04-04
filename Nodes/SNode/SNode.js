"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SNode = /** @class */ (function () {
    function SNode(data, next) {
        this._data = data;
        this._next = next;
    }
    Object.defineProperty(SNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: false,
        configurable: true
    });
    return SNode;
}());
exports.default = SNode;
