/**
 * @param {string[]} words
 * @return {string[]}
 */
 var removeAnagrams = function(words) {
    let x = new RegExp(words[0].split('').join('|')), l = words[0].length
    return words.filter(word=>x.exec(word) && word.length==l)//filter words with the same length, compare
};
console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))