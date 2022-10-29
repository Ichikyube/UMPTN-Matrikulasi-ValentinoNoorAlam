/**
 * @param {string} s
 * @return {boolean}
 **/
 const parantheses = [{
    open: '(',
    close: ')'
}, {
    open: '{',
    close: '}'
}, {
    open: '[',
    close: ']'
}]
var isValid = function (s) {
    let arr = [], str = s.split("");
    while(str.length>1) {
        if (parantheses.some(el => el.open == str[0])==false) return false;
        while (parantheses.some(el => el.open == str[0])) {
            arr.push(parantheses.findIndex(el => el.open == str[0]))
            str.shift()
        }
        while (arr.length != 0) {
            if (str[0] == parantheses[arr[arr.length - 1]].close) {
                str.shift()
                arr.pop()
            } else if (parantheses.some(el => el.close == str[0]) && 
                    str[0] != parantheses[arr[arr.length - 1]].close) {
                return false
            } else break
        }
    } 
    if(str.length == 0 && arr.length == 0) return true
    else return false
};
console.log(isValid("{"))
