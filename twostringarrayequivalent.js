/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};
word1 = ["ab", "c"], word2 = ["a", "bc"]
console.log(arrayStringsAreEqual(word1,word2))