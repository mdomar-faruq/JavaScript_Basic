var number=[1,2,3,4];
var result=number.splice(1,2,5,6,7,8,9,10); //(1,2,.....Add ..) 1 fore delete 2 index and add valu

console.log(number); //output: 1,5,6,7,8,9,10,4 --change the main(number)
console.log(result); //output: 2,3 