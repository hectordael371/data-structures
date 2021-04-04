import LinkedList from "../../Interfaces/LinkedList/LinkedListInterface";
import DNode from "../../Nodes/DNode/DNode";

export default class DoublyLinkedList implements LinkedList {
    private _header: DNode;
    private _trailer: DNode;
    private _size: number;

    constructor() {
        this._header = new DNode(null, null, null);
        this._trailer = new DNode(null, null, this._header);
        this._header.next = this._trailer;
        this._size = 0;
    }

    private getNode(index: number): DNode {
        let ntr: DNode;
        // Start at the end of the list.
        if (index > this._size / 2){
            index = this._size -index;
            ntr = this._trailer;
                
            while(index >= 0){
                ntr = ntr.prev;
                index -= 1;
            }
        }
        // index < this.size / 2
        else {
            // Start at the beginning of the list.
            ntr = this._header;
            while(index > 0){
                ntr = ntr.next;
                index -= 1;
            }

        }
        return ntr;
    }

    isEmpty(): boolean {
        return this._size == 0;
    }

    size(): number {
        return this._size;
    }

    add(index: number, element: any): void {
        if(index > this._size || index < 0 || index == null)
            throw new Error("Invalid index.");

        let nta: DNode;
        if(this._size == 0){
            nta = new DNode(element, this._trailer, this._header);
            this._header.next = nta;
            this._trailer.prev = nta;
        }

        else {
            let current = this.getNode(index);
            nta = new DNode(element, current.next, current);

            current.next.prev = nta;
            current.next = nta;
        }

        this._size += 1;
    }

    addFirst(element: any): void {
        this.add(0, element);
    }

    addLast(element: any): void {
        this.add(this._size, element);
    }

    get(index: number) {
        if(this._size == 0)
            throw new Error("List is empty.");

        else if (index >= this._size || index < 0 || index == null)
            throw new Error("Invalid index.");

        // index + 1 to get the actual node holding the element to read.
        let current = this.getNode(index + 1);
        return current.data;
    }

    getFirst() {
        if(this._size == 0)
            throw new Error("List is empty.");

        return this._header.next.data;
    }

    getLast() {
        if(this._size == 0)
            throw new Error("List is empty.");

        return this._trailer.prev.data;
    }

    set(index: number, element: any): void {
        if(this._size == 0)
            throw new Error("List is empty.");

        else if (index >= this._size || index < 0 || index == null)
            throw new Error("Invalid index.");

        // index + 1 to get the actual node holding the element to modify.
        let current = this.getNode(index + 1);
        current.data = element;
    }

    setFirst(element: any): void {
        this.set(0, element);
    }

    setLast(element: any): void {
        this.set(this._size -1, element);
    }

    remove(index: number): any {
        if(this._size == 0)
            throw new Error("List is empty.");

        else if(index >= this._size || index < 0 || index == null)
            throw new Error("Invalid index.");

        var ntr: DNode;
        if(this._size == 1){
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
        let etr = ntr.data;
        ntr.next = ntr.prev = ntr.data = null;

        this._size -= 1;
        return etr;
    }

    removeFirst(): any {
        return this.remove(0);
    }

    removeLast(): any {
        return this.remove(this._size -1);
    }

    clear(): void {
        let current = this._header;
        for (let i=0; i < this._size; i++){
            current = current.next;
            current.prev = current.prev.next = current.data = null;
        }

        this._header.next = this._trailer;
        this._trailer.prev = this._header;
        this._size = 0;
    }

    clone(): LinkedList {
        let list = new DoublyLinkedList(),
            current = this._header;

        for (let i=0; i < this._size; i++){
            current = current.next;
            list.addLast(current.data);
        }

        return list;
    }

    toArray(): any[] {
        let current = this._header.next,
            list = [];

        while(current != this._trailer){
            list.push(current.data);
            current = current.next;
        }

        return list;
    }

}

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