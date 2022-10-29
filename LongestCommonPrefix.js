var longestCommonPrefix2 = function (strs) {
    let arr = strs.map(a=>a[0]), arr2 = [...new Set(arr)], ans = [];
    function charcount(ar,a) {
        for (i=0;i<ar.length;i++) {
            let count=0
            for(j=0;j<strs.length;j++) {
                if (ar[i]==strs[j][a]) {
                    count++
                }
            }
            ar[i]={key:ar[i],n:count}
        }
    }
    function charappend(ar,a) {
        charcount(ar,a);
        ar.sort((a,b)=>(b.n-a.n));
        if(ar[0].n==1) return;
        ans.push(ar[0].key)
    }
    for(x=0;x<6;x++) {
        charappend(arr2,x)
        arr2 = [...new Set(strs.filter(a=>a[x]==arr2[0].key).map(a=>a[x+1]))];
        
    }
    return ans.join('')

};
var longestCommonPrefix3 = function (strs) {
    let arr = strs.map(a=>a[0]), set = [...new Set(arr)], ans = [], x = 0;
    function charcount(set,a) {
        for (i=0;i<set.length;i++) {
            let count=0
            for(j=0;j<strs.length;j++) {
                if (set[i]==strs[j][a]) {
                    count++
                }
            }
            set[i]={key:set[i],n:count}
        }
    }
    function charappend(ar) {
        ar.sort((a,b)=>(b.n-a.n));
        ans.push(ar[0].key)
    }
    charcount(set,x);
    while(set[0].n==strs.length) {
        charappend(set)
        set = [...new Set(strs.filter(a=>a[x]==set[0].key).map(a=>a[x+1]))];
        x++
        charcount(set,x);
    }
    return ans.join('')
};

var longestCommonPrefix4 = function (strs) {
    let ans = [], x=2;
    for(i=0;i<x;i++) {
        const set = [...new Set(strs.map(a=>a[i]))]
        if(set.length===1) {
            ans.push(set[0])
            x++
        }
        else break;
    } 
    return ans.join('')
};
/**
 * @param {string[]} strs
 * @return {string}
 * find the shortest word, test if other word start with, divide by two, test again, if true, test if it true with more char, if not, test with half of the divide
 */
var longestCommonPrefix = function (strs) {
    if(strs.length == 1) return strs[0]
    if(strs.some(el => el.trimStart() == "" )) return ""
    strs.sort((a,b)=>{
                        if(a.length>b.length) return 1;
                        if(b.length>a.length)return -1;
                        return 0
                     })
    let arr = strs[0]
    
    do {
        if(strs.every(el => el.startsWith(strs[0]))==true) return strs[0]
        while(strs.every(el => el.startsWith(arr))==false) {
            arr = arr.substring(0,Math.ceil(arr.length/2))
            if (arr.length<=1) 
                return strs.every((el) => el.startsWith(arr))==true? arr :  ""
        }
        arr = strs[0].substring(0,arr.length+Math.ceil(arr.length/2))
    } while(strs.every((el) => el.startsWith(arr))==true)
    return strs[0].substring(0,arr.length-1)
};
strs =["abab","aba","abc"]
console.log(longestCommonPrefix(strs))
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
