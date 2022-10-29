/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion, n) {

    return function(n) {
        if(n>1) {
            while(isBadVersion(Math.ceil(n/=2))) {
                console.log("ya")
            }
        }
        
    };
};

var isBadVersion = function(x) {
    return x == 25
}
console.log(solution(isBadVersion, 5))