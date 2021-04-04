export default interface Tree {
    // Create Operations
    insert(data: any): void;

    // Read Operations
    preOrder(): any[];
    inOrder(): any[];
    postOrder(): any[];

    breadthFirst(): any[];
    depthFirst(): any[];

    // Update Operations
    
    // Delete Operations

    // Size Operations
    size(): number
    isEmpty(): boolean
    depth(): number;

    // Auxiliary Operations 
    clone(): Tree
    clear(): void
    toArray(order: string): any[]
}