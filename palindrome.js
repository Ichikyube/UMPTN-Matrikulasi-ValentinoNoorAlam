function reverseString3(str) {
    let array = []
    for (i = str.length - 1; i > -1; i--) {
        array.push(str.charAt(i));
    }
    str = array.join('')
    return str;
}
console.log(reverseString('Let\'s Start'));

function reverseString2(str) {
    let array = str.split("")
    return array.reverse().toString()
}
console.log(reverseString2('Let\'s Start'));

function reverseString(str) {
    let array = str.split("")
    return array.reverse().join("").toString()
}
console.log(reverseString('Let\'s Start'));

function reverseInt2(int) {
    let str = reverseString(String(int));
    int = Number(str);
    return int;
  }
  console.log(reverseInt2(689));
function reverseInt(int) {
    return Number(String(int).split("").reverse().join(""))
}
console.log(reverseInt(689));

function isPalindrome3(str) {
    let reversedstr = reverseString(str);
    return String(str === reversedstr);
}
console.log(isPalindrome("racecar") === 'true');

function isPalindrome2(str) {
    let arr = str.split(""),
        len = arr.length;
    for (i = 0; i < len; i++) {
        if (arr[i] != arr[len - 1 - i]) return false
    }
    return true;
}

function isPalindrome(str) {
    return str === str.split("").reverse().join("").toString()
}

console.log(isPalindrome('racgtegcar'));

function ispalindrom(str) {
    let filtered = str.toLowerCase().split("").filter(str => /[A-Za-z]/.test(str));
    return filtered.reverse().join("") === filtered.join("")
}
console.log(ispalindrom("b'o xoB"))