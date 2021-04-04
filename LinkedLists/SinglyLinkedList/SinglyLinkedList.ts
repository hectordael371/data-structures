import LinkedList from '../../Interfaces/LinkedList/LinkedListInterface';
import SNode from '../../Nodes/SNode/SNode';

export default class SinglyLinkedList implements LinkedList {
    private _header: SNode;
    private _size: number;

    constructor() {
        this._header = new SNode(null, null);
        this._size = 0;
    }
    size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this._size == 0;
    }

    add(index: number, element: any): void {
        if(index < 0 || index > this._size || index == null)
            throw new Error("Invalid index.");

        let current = this._header;
        while(index > 0){
            current = current.next;
            index -= 1;
        }

        let nta = new SNode(element, current.next);
        current.next = nta;
        this._size += 1;
    }

    addFirst(element: any): void {
        this._header.next = new SNode(element, this._header.next);
        this._size += 1;
    }

    addLast(element: any): void {
        this.recursiveAddLast(this._header, element);
    }

    private recursiveAddLast(current: SNode, element: any) {
        if(current.next == null){
            current.next = new SNode(element, null);
            this._size += 1;
        }
        else    
            return this.recursiveAddLast(current.next, element);
    }

    get(index: number) {
        if(index < 0 || index >= this._size || index == null)
            throw new Error('Invalid index.');

        let current = this._header;
        while(index >= 0){
            current = current.next;
            index -= 1;
        }
        return current.data;
    }

    getFirst() {
        if(this._size == 0)
            throw new Error("List is empty.");

        return this._header.next.data;
    }

    getLast() {
        if(this._size == 0)
            throw new Error('List is empty.');

        return this.recursiveGetLast(this._header);
    }

    private recursiveGetLast(current: SNode) {
        if(current.next == null)
            return current.data;

        else
            return this.recursiveGetLast(current.next);
    }

    set(index: number, element: any): void {
        if(this._size == 0)
            throw new Error("List is empty.");

        else if(index < 0 || index >= this._size || index == null)
            throw new Error("Invalid index.");

        let current = this._header;
        while(index >= 0){
            current = current.next;
            index -= 1;
        }

        current.data = element;
    }

    setFirst(element: any): void {
        if(this._size == 0)
            throw new Error("List is empty.");

        this._header.next.data = element;
    }

    setLast(element: any): void {
        if(this._size == 0)
            throw new Error("List is empty.");

        this.recursiveSetLast(this._header, element);
    }

    private recursiveSetLast(current: SNode, element: any) {
        if(current.next == null)
            current.data = element;

        else
            this.recursiveSetLast(current.next, element);
    }

    remove(index: number) {
        if(this.isEmpty())
            throw new Error('List is empty.');
        
        else if(index < 0 || index >= this.size() || index == null)
            throw new Error('Invalid index.');

        let current = this._header;
        while(index > 0){
            current = current.next;
            index -= 1;
        }    

        let ntr = current.next,
            etr = ntr.data;

        current.next = ntr.next;
        this._size -= 1;

        ntr.data = ntr.next = null;
        return etr;
    }

    removeFirst() {
        if (this._size == 0)
            throw new Error("List is empty.");

        let ntr = this._header.next,
            etr = ntr.data;

        this._header.next = ntr.next;
        ntr.data = ntr.next = null;

        this._size -= 1;
        return etr;
    }

    removeLast() {
        return this.recursiveRemoveLast(this._header);
    }

    private recursiveRemoveLast(current: SNode){
        if(current.next.next == null){
            let ntr = current.next,
                etr = ntr.data;

            current.next = ntr.data = null;
            this._size -= 1;
            return etr;
        }

        else
            return this.recursiveRemoveLast(current.next);
    }

    clear(): void {
        this.recursiveClear(this._header);
        this._size = 0;
    }

    private recursiveClear(current: SNode){
        if(current.next == null)
            return null;

        current.data = current.next = this.recursiveClear(current.next);
    }

    clone(): LinkedList {
        return this.recursiveClone(this._header.next, new SinglyLinkedList());
    }

    private recursiveClone(current: SNode, clone: LinkedList) {
        if(current.next != null)
            this.recursiveClone(current.next, clone)
    
        clone.addFirst(current.data);
        return clone;
    }

    toArray(): any[] {
        let current = this._header.next;
        return this.recursiveToArray(current, []);
    }

    private recursiveToArray(current: SNode, list: any[]){
        if(current == null)
            return list;

        else {
            list.push(current.data);
            return this.recursiveToArray(current.next, list);
        }
    }

    reverseList(): LinkedList {
        return this.recursiveReverse(this._header.next, new SinglyLinkedList());
    }

    private recursiveReverse(current: SNode, list: LinkedList){
        list.addFirst(current.data);

        if(current.next != null)
            this.recursiveReverse(current.next, list);
        
        return list;
    }
}

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