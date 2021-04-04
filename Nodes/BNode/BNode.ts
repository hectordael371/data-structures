export default class BNode {
    private _data: any;
    private _left : BNode;
    private _right: BNode;

    constructor(data: any, left: BNode, right: BNode) {
        this._data = data;
        this._left = left;
        this._right = right;
    }

    get data(): any {
        return this._data;
    }

    set data(data: any) {
        this._data = data;
    }

    get left(): BNode {
        return this._left;
    }

    set left(left: BNode) {
        this._left = left;
    }

    get right(): BNode {
        return this._right;
    }

    set right(right: BNode) {
        this._right = right;
    }
}