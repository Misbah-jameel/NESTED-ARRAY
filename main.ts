// // NESTED ARRAY
let array1 =["MISBAH","MARIYA",["MADIHA","ZAINAB","MARIYAM"]];
console.log("ARRAY",array1);
console.log("index 0:",array1[0]);
console.log("index 1:",array1[1]);
console.log("index 2:",array1[2]);
console.log("nested array index 0:",array1[2][0]);
console.log("nested array index 1:",array1[2][1]);
console.log("nested array index 2:",array1[2][2]);

console.log("=====================================================")
 
let array: (string|string[])[] =["MISBAH","MARIYA",["MADIHA","ZAINAB","MARIYAM"]];
let nestedArray= array[2];
console.log("Nested array index 0:",nestedArray[0]);
console.log("Nested array index 1:",nestedArray[1]);
console.log("Nested array index 2:",nestedArray[2]);
