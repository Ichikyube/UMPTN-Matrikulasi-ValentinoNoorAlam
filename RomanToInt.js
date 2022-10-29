const Symbol={
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
} 
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// if((a==Symbol['C'] && (b==Symbol['D']||b==Symbol['M'])) || 
// (a==Symbol['X'] && (b==Symbol['L']||b==Symbol['C'])) || 
// (a==Symbol['I'] && (b==Symbol['V']||b==Symbol['X']))) {b=b-a
//  b-=a
// }   else   a+=b;
// return a         
var romanToInt = function(s) {
    let year =  s.split('').map(char=>Symbol[char]), arr = []
    while(year.length!=0) {
        if((year[0]==Symbol['C'] && (year[1]==Symbol['D']||year[1]==Symbol['M'])) ||
           (year[0]==Symbol['X'] && (year[1]==Symbol['L']||year[1]==Symbol['C'])) ||
           (year[0]==Symbol['I'] && (year[1]==Symbol['V']||year[1]==Symbol['X']))) {
            arr.push(year.splice(0,2).reduce((a, b) => b-a))
        } else arr.push(year.shift())
    }
    return arr.reduce((a,b)=>a+b)
};
var s= "MCMXCIV"
//console.log(romanToInt(s))