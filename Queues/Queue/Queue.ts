import QueueInterface from '../../Interfaces/Queue/QueueInterface';
import DoublyLinkedList from '../../LinkedLists/DoublyLinkedList/DoublyLinkedList';

export default class Queue implements QueueInterface {
    private _queue: DoublyLinkedList;

    constructor () {
        this._queue = new DoublyLinkedList();
    }

    enqueue(element: any): void {
        this._queue.addLast(element);
    }

    peakFront() {
        if(this._queue.isEmpty())
            throw new Error("Queue is empty.")

        return this._queue.getFirst();
    }

    peakRear() {
        if(this._queue.isEmpty())
            throw new Error("Queue is empty.")

        return this._queue.getLast();
    }

    dequeue(): any {
        if(this._queue.isEmpty())
            throw new Error("Queue is empty.")

        return this._queue.removeFirst();
    }

    isEmpty(): boolean {
        return this._queue.isEmpty();
    }

    size(): number {
        return this._queue.size();
    }

    clear(): void {
        this._queue.clear();
    }

    clone(): Queue {
        let clone = new Queue(),   
            elements = this._queue.clone();

        while(!elements.isEmpty())
            clone.enqueue(elements.removeFirst())
        
        return clone;
    }

    toArray(): any[] {
        return this._queue.toArray();
    }

}

// let queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(5);
// queue.enqueue(7);

// let clone = queue.clone();

// queue.dequeue();
// queue.dequeue();

// console.log(queue.toArray())
// console.log(clone.toArray())

// console.log(queue.dequeue());

// console.log(queue.isEmpty());
// console.log(clone.size())