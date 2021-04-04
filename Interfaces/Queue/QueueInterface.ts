export default interface Queue {
    // Create Operations
    enqueue(element: any): void;

    // Read Operations
    peakFront(): any;
    peakRear(): any;

    // Delete Operations
    dequeue(): void;

    // Size Operations
    isEmpty(): boolean;
    size(): number;

    // Auxiliary Operations
    clear(): void;
    clone(): Queue;
    toArray(): any[];
}