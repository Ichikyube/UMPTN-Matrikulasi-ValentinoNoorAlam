// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    //trim end and start and then divide word by space and punctuation, then capitalize the first character in every word, replace every words.
    let array = str.split("");
    let firstchari = array.map((a, i) => a == " " ? i + 1 : undefined).filter(x => x);
    firstchari.unshift(0);
    firstchari.forEach(a => {
        array[a] = str.charAt(a).toUpperCase()
    });
    return array.join('');
}

function capitalizeLetters(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ").toString()
}
console.log(capitalizeLetters("i love javascript"))