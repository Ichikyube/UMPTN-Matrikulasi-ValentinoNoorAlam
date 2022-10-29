// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter2(str) {
    let arr = str.split(""),
        set = [...new Set(arr)],
        diff = (arr.length - set.length) + 1,
        count = [];
    for (j = 0; j < set.length; j++) {
        count[j] = 0;
        for (i = 0; i < arr.length; i++)
            if (set[j] == arr[i]) count[j]++;
        if ((diff - count[j]) < diff / 2) return set[j];
    }
    return "Just average chars"
}

console.log(maxCharacter("javvvvasiciddddddddddddddddriptzzzzzzzzzzzzzzzzzzzzzzz"))

function maxCharacter(str) {
    let arr = str.split("").sort(),
        count = 0,
        set = [];
    for (i = 0; i < arr.length - 2; i++) {
        count++;
        if (arr[i] != arr[i + 1]) {
            set.push({
                key: arr[i],
                value: count
            });
            count = 0;
        }
    }
    return set.sort((a, b) => b.value - a.value).filter((x, i) => x.value > 1 && i < 3)
}

console.log(maxCharacter("javaneeeeeeeesanccriptumangapyu"))