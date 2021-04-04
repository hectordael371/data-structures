import StackInterface from '../../Interfaces/Stack/StackInterface';
import SinglyLinkedList from '../../LinkedLists/SinglyLinkedList/SinglyLinkedList';

export default class Stack implements StackInterface {
    private _stack: SinglyLinkedList;

    constructor() {
        this._stack = new SinglyLinkedList();
    }

    push(element: any): void {
        this._stack.addFirst(element);
    }

    top() {
        if (this._stack.isEmpty())
            throw new Error('Stack is empty.');

        return this._stack.getFirst();
    }

    pop() {
        if (this._stack.isEmpty())
            throw new Error('Stack is empty.');

        return this._stack.removeFirst();
    }

    size(): number {
        return this._stack.size();
    }

    isEmpty(): boolean {
        return this._stack.isEmpty();
    }

    clear(): void {
        this._stack.clear();
    }

    clone(): Stack {
        let clone = new Stack(),
            elements = this._stack.reverseList();

        while(!elements.isEmpty())
            clone.push(elements.removeFirst());

        return clone; 
    }

    toArray(): any[] {
        return this._stack.toArray();
    }

}

// let stack = new Stack();

// stack.push(2);
// stack.push("this");
// stack.push(true);

// let clone = stack.clone();

// console.log(stack.toArray())
// console.log(clone.toArray())

// // stack.pop();
// // console.log(stack.pop())
// console.log(stack.toArray())
// console.log(clone.toArray())

// console.log(stack.isEmpty())
// stack.clear()
// console.log(stack.isEmpty())