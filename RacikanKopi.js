// racikan kopi
function kopi() {
    let bijikopi = ["Toraja", "Wamena", "Kintamani", "FloresBajawa", "Gayo"],
        mixkopi = [];
    for (i = 0; i < bijikopi.length; i++) {
        for (j = i + 1; j < bijikopi.length; j++) {
            for (k = j + 1; k < bijikopi.length; k++) {
                mixkopi.push([bijikopi[i], bijikopi[j], bijikopi[k]])
            }
        }
    }
    return console.log(mixkopi.length)
}

