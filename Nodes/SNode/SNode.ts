export default class SNode {
    private _data: any;
    private _next: SNode;

    constructor(data: any, next: SNode) {
        this._data = data;
        this._next = next;
    }

    get data(): any {
        return this._data;
    }

    set data(data: any) {
        this._data = data;
    }

    get next(): SNode {
        return this._next;
    }

    set next(next: SNode) {
        this._next = next;
    }
}