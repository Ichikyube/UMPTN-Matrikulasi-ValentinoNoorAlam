function run(arr) {
    let array = [],
        m = arr.map(n => n + 1),
        count = 0;
    let newarr = arr.map(function (n, i) {
        return {
            array1: (n + 1) * 2,
            array2: n * 2
        };
    })
    for (i = 0; i < newarr.length; i++) {
        array.push( newarr[i].array2)
    }
    for (const el of m) {
        for (i = 0; i < array.length; i++) {
            if (el == array[i]) count++
        }
    }
    return count;
}

console.log(run([1, 2, 3])) //2
console.log(run([1, 1, 3, 3, 5, 5, 7, 7])) //8
console.log(run([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5])) //+ "  =>  " +12
console.log(run([1, 3, 2, 3, 5, 3, 7, 3, 9])) //+ "  =>  " +10
console.log(run([5, 7, 6, 8, 7, 9, 8, 10, 9, 11])) //+ "  =>  " +3
console.log(run([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])) //+ "  =>  " +6
console.log(run([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3])) //+ "  =>  " +44
console.log(run([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])) //+ "  =>  " +1
console.log(run([21, 22, 23, 24, 23, 22, 21, 22, 23])) //+ "  =>  " +0
console.log(run([1, 3, 11, 13, 21, 23, 31, 33, 41, 43])) //+ "  =>  " +13
console.log(run([1, 5, 2, 4, 3, 3, 4, 2, 5, 1])) //+ "  =>  " + 12
console.log(run([9, 20, 10, 21, 11, 22, 12, 23, 13, 24])) //+ "  =>  " + 2

console.log(run([1, 2, 3])) //2
console.log(run([1, 1, 3, 3, 5, 5, 7, 7])) //8
console.log(run([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5])) //+ "  =>  " +12
console.log(run([1, 3, 2, 3, 5, 3, 7, 3, 9])) //+ "  =>  " +10
console.log(run([5, 7, 6, 8, 7, 9, 8, 10, 9, 11])) //+ "  =>  " +3
console.log(run([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])) //+ "  =>  " +6
console.log(run([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3])) //+ "  =>  " +44
console.log(run([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])) //+ "  =>  " +1
console.log(run([21, 22, 23, 24, 23, 22, 21, 22, 23])) //+ "  =>  " +0
console.log(run([1, 3, 11, 13, 21, 23, 31, 33, 41, 43])) //+ "  =>  " +13
console.log(run([1, 5, 2, 4, 3, 3, 4, 2, 5, 1])) //+ "  =>  " + 12
console.log(run([9, 20, 10, 21, 11, 22, 12, 23, 13, 24])) //+ "  =>  " + 2

function fibonacci(len) {
    var number = [];
    number[0] = 0;
    number[1] = 1;
    number[2] = 1;
    for(i=3;i<len;i++) {
        number[i] = number[i-1] + number[i-2];
    }
    return number;
}
console.log(fibonacci(100))


class Stack {
    constructor(arr)
    {
        this.items = [...arr];
    }
    
    peek() {
        return this.items[this.items.length-1];
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
        let array = [this.items.splice(Math.ceil(this.items.length/2))]
        array.push(this.items)
        return this.items = array
    }
    mix() {
        this.divide();
        let a, b, aindex = 0, bindex = 0, array = [], len = this.items[0].length+this.items[1].length;
        if(this.items[1].length>this.items[0].length || this.items[0][0]>this.items[1][0]) a = 1, b = 0;
        else a = 0, b = 1;
        for(i=1;i<len;i++) {
            if (i%2==1) {
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
let A = new Stack([1,2,3,4,5,6,7,8,9,10])
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
        this.prev;
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

function ispalindrom(str) {
    let filtered = str.toLowerCase().split("").filter(str=>/[A-Za-z]/.test(str));
    return filtered.reverse().join("") === filtered.join("")
}
console.log(ispalindrom("b'o xoB"))