// biaya pengiriman
// Terdapat N kota bernomor 1 sampai N, di antara dua kota
// terdapat jalan dua arah bernomor N - 1 yang menghubungkan
// kota i dan i + 1 ( 1 ≤ i ≤ N).
// Berikut adalah contoh dengan N = 4

// Setiap kota memiliki toko yang menjual barang, dari
// setiap kota dapat mengirim barang ke kota lain, tetapi
// dengan biaya pengiriman. Ongkos kirim sama dengan
// jumlah jalan yang dilalui.
// Misalnya ongkos kirim dari kota 4 ke kota 2 adalah 2
// karena melalui 2 jalur.
// Anda diminta menentukan berapa total biaya untuk
// membeli suatu barang jika membeli di kota i (1 ≤ i ≤ N)
// Input
// Diketahui N adalah jumlah kota, h[] adalah array dari
// jalur yang dilalui, diisi dengan kota i.
// Output
// Total biaya pengiriman untuk membeli barang di setiap
// kota dari i ke N kota.
function ongkir(n, h) {
    let kota = [], biaya = [];
    for(i=0;i<h.length-1;i++) {
        biaya[i]=Math.abs(h[i+1]-h[i]) 
    }
    for(i=1;i<=n;i++) {
        kota.push({kota: i,
            jalan: i==1?1:i-1})
    }
    // Return value to check your result
    return console.log(biaya.reduce((a,b)=>a+b))
}
ongkir(N = 900, h = [1, 5, 2,4, 3])
// Aturan
//  1 ≤ N ≤ 100.000
//  1 ≤ i ≤ 100.000
//  N and i is integer
// Kasus Percobaan
// No Input Output
// 1. N = 5, h = [1, 5, 2,4, 3]

// 10

// 2. N = 6, h = [6, 3, 1, 6, 5]

// 11

// 3. N = 15, h = [1, 10,
// 9, 12, 13, 15]

// 16

// 4. N = 100, h = [10,
// 80, 90, 50, 20, 1]

// 169

// 5. N = 23, h = [1, 1, 2,
// 4, 10, 11, 12, 20,
// 23]

// 22

// No Input Output
// 6. N = 8, h = [1, 8, 1,

// 1, 5, 8]

// 21

// 7. N = 10, h = [10, 9,
// 8, 7, 6, 5, 3, 2, 1]

// 9

// 8. N = 89, h = [88,
// 10, 26, 83, 49,
// 28, 9]

// 225

// 9. N = 900, h = [900,
// 1, 20, 847, 990, 3,
// 903, 333]

// 4345

// 10. N = 20, h = [19,
// 18, 20, 7, 8, 10, 2,
// 10, 5, 10]

function buildGraph(road) {
    let graph = Object.create(null);
    function addroad(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for(let [from, to] of  road.map(r =>r.split("-"))) {
        addroad(from, to);
        addroad(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);