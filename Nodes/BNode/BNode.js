"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BNode = /** @class */ (function () {
    function BNode(data, left, right) {
        this._data = data;
        this._left = left;
        this._right = right;
    }
    Object.defineProperty(BNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BNode.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (left) {
            this._left = left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BNode.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (right) {
            this._right = right;
        },
        enumerable: false,
        configurable: true
    });
    return BNode;
}());
exports.default = BNode;
