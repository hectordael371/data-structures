export default interface LinkedList {
    // Create Operations
    add(index: number, element: any): void;
    addFirst(element: any): void;
    addLast(element: any): void;

    // Read Operations
    get(index: number): any;
    getFirst(): any;
    getLast(): any;

    // Update Operations
    set(index: number, element: any): void;
    setFirst(element: any): void;
    setLast(element: any): void;

    // Delete Operations
    remove(index: number): any;
    removeFirst(): any;
    removeLast(): any;

    // Size Operations
    size(): number;
    isEmpty(): boolean;

    // Auxiliary Operations
    clear(): void;
    clone(): LinkedList;
    toArray(): any[];
}