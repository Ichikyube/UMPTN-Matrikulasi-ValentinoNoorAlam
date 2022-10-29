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
    let arr = [],
        str = s.split("")
    while (str.length != 0) {
        if (parantheses.some(el => el.open == str[0])) {
            arr.push(parantheses.findIndex(el => el.open == str[0]))
            str.shift()
        } else {
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
    }
    if(arr.length>0) return false
    else return true
};
console.log(isValid(")"))
