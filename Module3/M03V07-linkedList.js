class Node{
    constructor(value){
        this.data= value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    

    // add some nodes in last ; as like push()
    append(value){
        const newNode = new Node(value);
        

        //  If linkedList is empty
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            //  If linkedList is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
    }

    // add some node in first ; as like unshift()
    prepend(){}

    insert(){}

    remove(){}

    print(){
        const arr =[];
        let currentNode = this.head;
        while(currentNode != null){
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(arr.join(" -> "),"-> null" )
    }
}

const newLinkList = new LinkedList();
newLinkList.append(10);
newLinkList.append(20);
newLinkList.append(30);

newLinkList.print();