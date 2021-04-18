// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){ //constructor function, run when creating new instance, two properties
        this.data = data;       //data property of node
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null; //property, default to null
    }

    insertFirst(data){
        //const node = new Node(data, this.head);
        //this.head = node;
        this.head = new Node(data, this.head);
    }

    size(){
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if (!this.head){
            return null;
        }

        let node = this.head;
        while(node){
            if (!node.next){
                return node;
            }
            node = node.next;
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){ 
        if (this.head){
            this.head = this.head.next;
        }
    }

    removeLast(){
        if (!this.head){
            return;
        }

        if (!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next){
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    reverseList(){
        if(!this.head){
            return;
        }

        let node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;   
        }
        console.log("-----"); 

        let next = null;
        let prev = null;

        node = this.head;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        this.head = prev;



        node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;   
        }
    }


    insertLast(data){

    }

}

const list = new LinkedList();
list.insertFirst('d');
list.insertFirst('c');
//list.insertLast('c');
//list.getLast(); // returns node with data 'C'


list.insertFirst('b');
list.insertFirst('a');
list.reverseList();

module.exports = { Node, LinkedList };
