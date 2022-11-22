/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
    // Using Recursive (silahkan dipahami sendiri)
    // if (!list1) return list2;
    // else if (!list2) return list1;
    // else if (list1.val <= list2.val) {
    //     list1.next = mergeTwoLists(list1.next, list2);
    //     return list1;
    // } else {
    //     list2.next = mergeTwoLists(list1, list2.next);
    //     return list2;
    // }
    
    
    // Using While Loop O(n) 1x loop
    const list3 = new ListNode(); // buat list baru dengan value empty untuk menyimpan merged sorted linked list
    let pointer1 = list1; // inisialiasasi pointer untuk linked list 1
    let pointer2 = list2; // inisialiasasi pointer untuk linked list 2
    let pointer3 = list3; // inisialiasasi pointer untuk linked list 3
    
    while (pointer1 && pointer2) { // loop dengan kondisi pointer1 dan pointer2 masih memiliki value
        if (pointer1.val < pointer2.val) { // kondisi jika value pointer1 lebih kecil dari pointer2
            pointer3.next = pointer1; // mengisi next list dari list3 dengan node list 1 saat ini
            pointer1 = pointer1.next; // mengganti pointer1 saat ini dengan list node selanjutnya
        } else { // kondisi jika value pointer1 lebih besar dari pointer2
            pointer3.next = pointer2; // mengisi next list dari list3 dengan node list 1 saat ini
            pointer2 = pointer2.next; // mengganti pointer2 saat ini dengan list node selanjutnya
        }
        pointer3 = pointer3.next; // mengganti pointer3 saat ini dengan list node selanjutnya untuk bisa mengisi value node selanjutnya
    }
    if (pointer1) pointer3.next = pointer1; // jika pointer1 masih memiliki value masukan ke list3
    if (pointer2) pointer3.next = pointer2; // jika pointer2 masih memiliki value masukan ke list3
    return list3.next; // return list 3 mulai dari node ke 1 (0 index)
    
    // Using while loop O(n4) 4x loop
//     let arr = []; // inisialisasi arr untuk menyimpan semua value dari kedua node
//     while (list1) { // loop dengan kondisi pointer1 dan pointer2 masih memiliki value
//         arr.push(list1.val); // tambahkan setiap value ke array
//         list1 = list1.next; // mengganti list1 saat ini dengan list node selanjutnya
//     }
//     while (list2) { // loop dengan kondisi pointer1 dan pointer2 masih memiliki value
//         arr.push(list2.val); // tambahkan setiap value ke array
//         list2 = list2.next; // mengganti list1 saat ini dengan list node selanjutnya
//     }
//     if (list1) arr.push(list1.val); // jika list1 masih memiliki value masukan ke array
//     if (list2) arr.push(list2.val); // jika list2 masih memiliki value masukan ke array
//     arr = arr.sort((a, b) => a - b); // urutkan array dari yang terkecil ke terbesar
    
//     const newList = new ListNode(); // buat list baru dengan value empty untuk menyimpan merged sorted linked list
//     let pointer = newList; // inisialiasasi pointer untuk linked list baru
    
//     for (const val of arr) { // iterasi setiap value dari array
//         pointer.next = new ListNode(val); // isi next node dari node saat ini dengan list node dengan value dari value array saat ini
//         pointer = pointer.next; // mengganti pointer saat ini dengan list node selanjutnya
//     }
//     return newList.next; // return list 3 mulai dari node ke 1 (0 index)
};