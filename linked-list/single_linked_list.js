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

SingleLinkedList.prototype.reverse = function() {
    function recursionReverse(current, prev, list) {
        if (!current.next) {
            list.head = current;
            current.next = prev;
            return;
        }
        let next = current.next;
        current.next = prev;
        current.prev = null;
        recursionReverse(next, current, list);
    }
    let current = this.head;
    this.tail = this.head;
    recursionReverse(current, null, this);
}

SingleLinkedList.prototype.reverse1 = function() {
    function recursionReverse1(head, list) {
        let first = head;
        let rest = first.next;
        if (!rest) {
            list.head = first;
            return;
        }
        recursionReverse1(rest, list);
        first.next.next = first;
        first.next = null;
    }
    let head = this.head;
    recursionReverse1(head, this);
}

SingleLinkedList.prototype.segregateEvenAndOdd = function() {
    // function segregateEvenAndOddRecur(prev_target, target, current, prev) {
    //     if (!current.next) {
    //         return;
    //     }

    // }
    var target = null;
    var prev_target = null;
    var current = this.head;
    var prev = this.head;
    while (current) {
        if (current.data % 2 == 0) {
            prev.next = current.next;
            if (prev_target == null) {
                prev_target = current;
                current.next = target;
                this.head = current;
                prev = current;
                current = current.next;
            } else {
                prev.next = current.next;
                prev_target.next = current;
                current.next = target;
                prev_target = current;
                current = prev.next;
            }
        } else {
            if (!target) {
                target = current;
            }
            if (!prev_target) {
                prev_target = prev;
            }
            prev = current;
            current = current.next;
        }

    }
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
mList.add(8);
mList.add(12);
mList.add(10);
mList.add(5);
mList.add(4);
mList.add(1);
mList.add(6);
mList.segregateEvenAndOdd();
mList.printAll();