function Node(data) {
    this.data = data;
    this.next = null;
}

function SingleLinkedList() {
    this.head = null;
    this.tail = null;
    this.total = 0;
}

SingleLinkedList.prototype.add = function(data) {
    if (!data) {
        return;
    }
    var node = new Node(data);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.total++;
}

SingleLinkedList.prototype.remove = function(data) {
    var current = this.head;
    var prev = this.head;
    while (current) {
        if (current.data === data) {
            if (current == this.head) {
                this.head = this.head.next;
            }
            if (current == this.tail) {
                this.tail = prev;
            }
            prev.next = current.next;
            this.total--;
        } else {
            prev = current;
        }
        current = current.next;
    }
}

SingleLinkedList.prototype.insertAfterIndex = function(data, index) {
    var node = new Node(data);
    var current = this.head;
    var _index = 0;
    while (current && (_index < index + 1)) {
        if (_index === index) {
            node.next = current.next;
            current.next = node;
            break;
        }
        _index++;
        current = current.next;
    }
    return _index;
}

SingleLinkedList.prototype.printAll = function() {
    var current = this.head;
    while (current) {
        if (current) {
            console.log(current.data);
        }
        current = current.next;
    }
}

SingleLinkedList.prototype.traverse = function(fn) {
    var current = this.head;
    while (current) {
        if (fn) {
            fn(current);
        }
        current = current.next;
    }
}

let mList = new SingleLinkedList();
mList.add(1);
mList.add(2);
mList.add(3);
mList.add(4);
mList.insertAfterIndex(5, 3);
mList.insertAfterIndex(6, 4);

mList.traverse(function(item) {
    console.log(item.data);
});