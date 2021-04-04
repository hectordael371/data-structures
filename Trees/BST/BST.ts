import Tree from "../../Interfaces/Tree/TreeInterface";
import BNode from "../../Nodes/BNode/BNode"

export default class BST implements Tree {
    private _root: BNode;
    private _size: number;

    constructor() {
        this._root = null;
        this._size = 0;
    }

    insert(data: any): void {
        if (this._root == null)
            this._root = new BNode(data, null, null)

        else    
            this.recInsert(data, this._root);

        this._size += 1;
        this._root = this.balanceTree(this.inOrder(), 0, this._size -1)
    }

    // If method is called, the tree is not empty.
    private recInsert(data: any, node: BNode){
        if (data == node.data)
            throw new Error("Item already exists in BST.")

        else if(data > node.data){
            if(node.right == null){
                node.right = new BNode(data, null, null);
            }
            else {
                this.recInsert(data, node.right);
            }
        }
        // data < node.data
        else {
            if(node.left == null){
                node.left = new BNode(data, null, null);
            } 
            else {
                this.recInsert(data, node.left);
            }
        }
    }

    private balanceTree(nodes: BNode[], start: number, end: number) {
        if(start > end)
            return null;

        let mid = Math.floor((start + end) / 2),
            node = nodes[mid];

        node.left = this.balanceTree(nodes, start, mid -1);
        node.right = this.balanceTree(nodes, mid + 1, end);
        return node;
    }

    // Traversal methods assume tree is not empty.
    preOrder(): BNode[] {
        return this.addPreOrder(this._root, []);
    }

    private addPreOrder(node: BNode, arr: any[]){
        arr.push(node);

        if(node.left != null)
            this.addPreOrder(node.left, arr);

        if(node.right != null) 
            this.addPreOrder(node.right, arr);

        return arr;
    }

    inOrder(): BNode[] {
        return this.addInOrder(this._root, []);
    }

    private addInOrder(node: BNode, arr: any[]) {
        if (node.left != null)
            this.addInOrder(node.left, arr);

        arr.push(node)

        if (node.right != null)
            this.addInOrder(node.right, arr);

        return arr;
    }

    postOrder(): BNode[] {
        return this.addPostOrder(this._root, []);
    }

    private addPostOrder(node: BNode, arr: any[]){
        if(node.left != null)
            this.addPostOrder(node.left, arr);
        
        if(node.right != null)
            this.addPostOrder(node.right, arr);

        arr.push(node);
        return arr;
    }

    breadthFirst(): BNode[] {
        return this.addBreadthFirst(this._root, []);
    }

    private addBreadthFirst(node: BNode, arr: any[]): any[] {
        if (node == null)
            return arr;

        let queue = [];
        queue.push(node)

        while(queue.length > 0){
            node = queue.shift();
            arr.push(node);

            if(node.left != null)
                queue.push(node.left);

            if(node.right != null)
                queue.push(node.right);
        }

        return arr;
    }

    depthFirst(): BNode[] {
        return;
    }

    size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this._size == 0;
    }

    depth(): number {
        return this.maxDepth(this._root);
    }

    private maxDepth(node: BNode): number {
        if (node == null)
            return 0;

        else 
            return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
    }

    clone(): BST {
        throw new Error("Method not implemented.");
    }

    clear(): void {
        if (this._size == 0)
            return;
        
        let arr = this.inOrder();
        arr.map((node) => {
            node = node.left = node.right = node.data = null;
        })

        this._root = null;
        this._size = 0;
    }

    toArray(order: string): any[] {
        if (this.isEmpty())
            return [];

        let arr: any[];
        switch(order){
            case "pre-order":
                arr = this.preOrder();
                break;

            case "in-order":
                arr = this.inOrder();
                break;

            case "post-order":
                arr = this.postOrder();
                break;

            case "level-order":
                arr = this.breadthFirst();
                break;

            default:
                throw new Error("Invalid traversal.");
        }

        return arr.map((node) => node.data);
    }
}

let bst = new BST();

console.log(bst.toArray("in-order"))

console.log(bst.size() == 0)
console.log(bst.isEmpty())

bst.insert(3);
bst.insert(0);
bst.insert(7);
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(4);
bst.insert(21);
bst.insert(25);
bst.insert(30);


// console.log(bst.size())

console.log(bst.toArray("in-order")); 
console.log(bst.toArray("pre-order")); 
console.log(bst.toArray("post-order")); 
console.log(bst.toArray("level-order")); 

console.log(bst.breadthFirst())

console.log(bst.depth())