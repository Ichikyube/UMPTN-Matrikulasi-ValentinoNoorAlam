// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for (i = 0; i <= 100; ++i) {
        let str = "";
        if (i % 3 == 0) str += "Fizz";
        if (i % 5 == 0) str += "Buzz";
        console.log(str ? str : i);
    }
}
fizzBuzz()