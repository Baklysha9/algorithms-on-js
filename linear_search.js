const mas = [1,3,5,7,3,6,8,3,6,4]
let count = 0;
const item = 7;

// algorithm complexity - O(n)
// returns the index
function linearSerch(mas, item) { 
    for (let i = 0; i < mas.length; i++) {
        count ++;
        if (mas[i] === item) return i
    }
    return null;
}

console.log(linearSerch(mas,item));
console.log('count = ', count);
