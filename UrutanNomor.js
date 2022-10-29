// urutan nomor
// [2,    2, 4,    4, 8,    6, 16,    8, 32,    10, 64, ...]
// [2.    2, 4,    4, 6,    8, 8,     16,10,    32,   ]
// [1,    2, 3,    4, 5,    6,  7,    8,  9,    10, 11...]
//  1        2        3         4         5          6        
// temukan polanya dan penuhi arraynya.
// Sebuah fungsi mengambil satu input angka (i) dan
// mengembalikan array sebagai output. Jika tidak ada item yang
// dikembalikan, akan memberikan array kosong sebagai gantinya.

// Batasan
// 0 ≤ i ≤ 100
function run(len) {
    let array = [], odd = 1, even = 1;len-1 == 0
    for (i = 0; i < len; i++) {
        if (i % 2 == 1 || i < 2 ){
            array.push(2**odd)
            odd++
        }
        if (i % 2 == 0){
            array.push(even*2)
            even++
        }
         array.push(2)

    }
    return console.log(array);
}