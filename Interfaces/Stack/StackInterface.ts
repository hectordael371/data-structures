export default interface Stack {
    // Create Operations
    push(element: any): void;

    // Read Operations
    top(): any;

    // Delete Operations
    pop(): any;

    // Size Operations
    size(): number;
    isEmpty(): boolean;

    // Auxiliary Operations
    clear(): void;
    clone(): Stack;
    toArray(): any[];
}