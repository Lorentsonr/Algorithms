class SLLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
   * Singly-Linked List class
   */

class SLL {
    constructor() {
      this.head = null; // the list is initially empty
    }

    /**
     * Adds a node to the front of the list with the given value.
     * 
     * @param {any} val the value to add
     * @returns {SLL} the list
     */

    insertAtFront(val) {
      // your code here
    const newNode = new SLLNode(val);
    if(this.head === null){
        this.head = newNode;
    } else{
        let runner = this.head;
        runner.next = runner;
        this.head = newNode;
    }
    
    return this;
    }

    /**
     * Removes and returns the value of the head node (or null if empty).
     * 
     * @returns {any|null}
     */

    removeHead() {
      // your code here
        if(this.head === null){
            return null;
        } else{
            var old_head = this.head;
            this.head = this.head.next;
            return old_head.val;
        }
    }

    /**
     * BONUS: returns the average of all values in the list.
     * 
     * @returns {number} the average of all values
     */

    getAverage() { 
      // your code here
        var sum = 0;
        var count = 0;
        if(this.head === null){
            return 0;
        } else {
            let runner = this.head;
            while(runner.next !== null){
                sum += runner.val;
                runner = runner.next;
                count++
            }
        }
        return sum/count
    }
}

const list = new SLL();

list.insertAtFront(1);
  console.log(list.head.val); // should log 1

list.insertAtFront(2);

  console.log(list.getAverage()); // should log 1.5

list.insertAtFront(3);
  console.log(list.head.val); // should log 3

  console.log(list.getAverage()); // should log 2

list.removeHead();
list.removeHead();

  console.log(list.getAverage()); // should log 1