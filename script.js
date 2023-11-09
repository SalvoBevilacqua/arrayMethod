// *I metodi sono dei blocchi di istruzione identificati in una funzione*

const fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi", "dragon fruit"];
const fruitsForDelete = ["Banana", "Orange", "Apple", "Mango", "kiwi", "dragon fruit"];
const arrayNumOne = [9, 23, 21, 4, 33, 32, 77, 46, 27];
const arrayNumTwo = [33, 12, 44, 54, 65, 87];

console.log(fruits, arrayNumOne, arrayNumTwo);


// TO STRING
const methodToString = fruits.toString();
console.log(fruits, methodToString);

// JOIN
const methodJoin = fruits.join(" e ");
console.log(fruits, methodJoin);

// POP
const methodPop = fruits.pop();
console.log(fruits, methodPop);

// PUSH
const methodPUSH = fruits.push(methodPop);
console.log(fruits);

// SHIFT
const methodShift = fruits.shift();
console.log(fruits, methodShift);

// UNSHIFT
const methodUnshift = fruits.unshift(methodShift);
console.log(fruits);
// restituisce la lunghezza dell'array

// DELETE
delete fruitsForDelete[1];
console.log(fruitsForDelete);
// WARNING, è distruttivo

// CONCAT
const methodConcat = arrayNumOne.concat(arrayNumTwo, fruits);
const methodConcatTwo = methodConcat.concat("fichi");
console.log(methodConcat, methodConcatTwo);

// FLAT
const myArr = [[1, 2], [3, 4], [5, 6], [14, [7, 8], 7]];
const newArr = myArr.flat();
console.log(myArr);
console.log(newArr);

// SPLICE
fruits.splice(2, 0, "peach", "grape");
console.log(fruits);

// SLICE
const methodSliceOne = fruits.slice(2);
const methodSliceTwo = fruits.slice(1, 4);
console.log(methodSliceOne, methodSliceTwo);