export default class DNode {
    private _data: any;
    private _next: DNode;
    private _prev: DNode;

    constructor(data: any, next: DNode, prev: DNode) { 
        this._data = data;
        this._next = next;
        this._prev = prev;
    }

    get data(): any {
        return this._data;
    }

    set data(data: any) {
        this._data = data;
    }

    get prev(): DNode {
        return this._prev;
    }

    set prev(prev: DNode) {
        this._prev = prev;
    }

    get next(): DNode {
        return this._next;
    }

    set next(next: DNode) {
        this._next = next;
    }

}