
class Stack {
    constructor(arr) {
        this.items = [...arr];
    }

    peek() {
        return this.items[this.items.length - 1];
    };
    pop() {
        return this.items.pop();
    }
    add(item) {
        return this.items.push(item);
    }
    clear() {
        return this.items.length = 0;
    }
    length() {
        return this.items.length;
    }
    search(item) {
        return this.items.indexOf(item, fromIndex)
    }
    slice(fromIndex, size) {
        return this.items.splice(fromIndex, size)
    }
    heap(stacks, ...any) {
        return this.items.concat(stacks, ...any)
    }
    divide() {
        let array = [this.items.splice(Math.ceil(this.items.length / 2))]
        array.push(this.items)
        return this.items = array
    }
    mix() {
        this.divide();
        let a, b, aindex = 0,
            bindex = 0,
            array = [],
            len = this.items[0].length + this.items[1].length;
        if (this.items[1].length > this.items[0].length || this.items[0][0] > this.items[1][0]) a = 1, b = 0;
        else a = 0, b = 1;
        for (i = 1; i < len; i++) {
            if (i % 2 == 1) {
                array.push(this.items[a][aindex])
                aindex++;
            } else {
                array.push(this.items[b][bindex])
                bindex++;
            }
        }
        if (aindex < this.items[a].length) array.push(this.items[a][aindex])
        if (bindex < this.items[b].length) array.push(this.items[b][bindex])
        return this.items = array
    }
    suffle() {
        //return this.items.
    }
}
let A = new Stack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(A.mix())

class Queue {
    constructor(arr) {
        this.items = [...arr];
    }

    last() {

    }
    add() {

    }
    out() {

    }
    clear() {

    }
    length() {

    }
    search() {

    }
    divide() {

    }
    concat() {

    }
    lineup() {

    }
    deploy() {

    }
}

class LinkedList {
    constructor(arr) {
        this.item;
        this.next;
    }

    search() {

    }
    current() {

    }
    add() {

    }
    remove() {

    }
    size() {

    }
}