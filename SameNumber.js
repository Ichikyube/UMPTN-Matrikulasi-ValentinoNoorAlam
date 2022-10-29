function SameNumber(arr) {
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
        array.push(newarr[i].array2)
    }
    for (const el of m) {
        for (i = 0; i < array.length; i++) {
            if (el == array[i]) count++
        }
    }
    return count;
}

console.log(SameNumber([1, 2, 3])) //2
console.log(SameNumber([1, 1, 3, 3, 5, 5, 7, 7])) //8
console.log(SameNumber([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5])) //+ "  =>  " +12
console.log(SameNumber([1, 3, 2, 3, 5, 3, 7, 3, 9])) //+ "  =>  " +10
console.log(SameNumber([5, 7, 6, 8, 7, 9, 8, 10, 9, 11])) //+ "  =>  " +3
console.log(SameNumber([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])) //+ "  =>  " +6
console.log(SameNumber([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3])) //+ "  =>  " +44
console.log(SameNumber([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])) //+ "  =>  " +1
console.log(SameNumber([21, 22, 23, 24, 23, 22, 21, 22, 23])) //+ "  =>  " +0
console.log(SameNumber([1, 3, 11, 13, 21, 23, 31, 33, 41, 43])) //+ "  =>  " +13
console.log(SameNumber([1, 5, 2, 4, 3, 3, 4, 2, 5, 1])) //+ "  =>  " + 12
console.log(SameNumber([9, 20, 10, 21, 11, 22, 12, 23, 13, 24])) //+ "  =>  " + 2










