
function passwordArranger(keyword) {
    var arr = keyword.split('$'), password = [], regex = arr[1];
    var filteredword = arr[0].replaceAll(regex, '');
    var erasedword = "setelah dihapus : " + filteredword;
    var word = filteredword.split('');
    var j = 0;
    do {
        if(word.length%2>0) {
            password.push(word.splice(word.length/2,2));
        }else {
            password.push(word.splice(word.length/2,1));
        } 
    } while (word.length > 0);
    var arrhill = password.join('').split(',');
    if(password.length%2>1) { 

    }
    for(i=0;i<(word.length/2);i++) {

    }
    return  console.log("setelah dihapus : " + filteredword + "\n" + arrhill + "\n" + "Password : " + password.join(',').replaceAll(',','') + " - Harta Karun Didapatkan!");
}

passwordArranger("semangatgaes$ga");
treasure("sayaanakgembala$a");


function treasure(s, delimiter = '$') {
    if (!s.includes(delimiter)) throw new Error('String must contain delimiter chacacter');
    console.time('treasure');
    let [word, remover] = s.split(delimiter); // split string with delimiter default '$' and assign to variable with array destructuring
    let i = 0, result = ''; // initialize index pointer and result string container
    word = word.replace(new RegExp(remover, 'g'), ''); // remove all containing token in raw string word
    const isOdd = word.length % 2 !== 0; // check if sanitized word is odd or even
    const halfWordLength = Math.floor(word.length / 2); // initialize half size of sanitized string word
    if (isOdd) { // if the sanitized string word is odd
        const middleCharacter = word[halfWordLength]; // take the middle character of sanitized string word
        word = word.slice(0, halfWordLength) + word.slice(halfWordLength + 1); // remove the middle character
        result += middleCharacter; // append middle character to result container
        console.log(' '.repeat(halfWordLength) + middleCharacter); // print to console middle string with pad with empty space in (half word length) times
    }
    do { // loop
        const leftIndex = Math.abs(i - halfWordLength + 1); // initialize left index (from index half string plus one (+1) decrement until zero)
        const rightIndex = i + halfWordLength; // initalize right index (from index half string plus current index increment to last string index)
        const leftPyramidString = `${' '.repeat(leftIndex)}${word[leftIndex]}`; // print word with left index started with empty space pad times left index
        const rightPyramidString = `${' '.repeat(i * 2)}${isOdd ? ' ' : ''}${word[rightIndex]}`; // print word with right index started with empty space pad times current index multiply by 2
        result += word[leftIndex] + word[rightIndex]; // append right and left word
        console.log(leftPyramidString + rightPyramidString); // print left and right pyramid to console
        i++; // increment the index pointer
    } while (i < halfWordLength) // range loop 0 - half word length (exclusive)
    console.log(`Answer : ${result}`);
    console.timeEnd('treasure')
}
 
treasure('semangatgaes$ga');