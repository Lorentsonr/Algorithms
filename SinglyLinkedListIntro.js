/**
 * Singly-Linked List Node class
 * @param {any} val
 */

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
     * Determines if the list is empty.
     * 
     * @returns {boolean}
     */

    isEmpty() {
      // your code here
        if(this.head === null){
            return true;
        }
        else{
            return false;
        }
        // this says same thing:
        // return this.head === null;
        // if this head is null will return true 
    }

    /**
     * Adds a node to the end of the list.
     * 
     * @param {any} val the value to add
     * @returns {SLL} the list
     */

    insertAtBack(val) {
    // your code here
    // what if the list is empty? - put it in the front    
    // while loop to traverse through the list 
        const newNode = new SLLNode(val); // creates the new node

        if(this.head === null){
            this.head = newNode;
        } else{
            let runner = this.head;
            while(runner.next !== null){
                runner = runner.next;
                //move down the line
            }
            runner.next = newNode;
        }

    return this; // returns the list object
    }

    /**
     * Adds all the array values to the list.
     * 
     * @param {any[]} arr an array of values
     * @returns {SLL} the list
     */

    seedFromArr(arr) {
      // your code here
        // optimize this as assignment
        for(let i =0; i < arr.length; i++){
            this.insertAtBack(arr[i]);
        }
    return this;
    }

    /**
     * Prints a comma-separated list of the values.
     * 
     * @returns {void}
     */
    
    display() {
      // your code here
    }
}

const list = new SLL();
  console.log(list.isEmpty()); // should log true

list.insertAtBack('Andy');
  list.display(); // should log 'Andy'

list.insertAtBack('Anthony');
  list.display(); // should log 'Andy,Anthony'

list.seedFromArr(['Bianca', 'CJ']);
  list.display(); // should log 'Andy,Anthony,Bianca,CJ'
  
  console.log(list.isEmpty()); // should log false