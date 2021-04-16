//destruction operation
const user={
  id:10,
  name:"alif",
  age:23,
  //email:"alif@alif.js",
  education:{
   degree:"BSc",
   //runing:"Master"
  },

};

/*
 const {email}=user;
console.log(email);  //error is not defined
const {email}={}=user; 
console.log(email); //undefined

const {education:{runing}={}}=user; //undefined
*/

const {education:{degree}}=user;  //destruction operation 
console.log(degree); //output: BSc


//array destruction
var number=[1,2,3,[50,60,70],8,9];

var [ , , ,[a, ,b ]]=number;
console.log(a,b); //output:50 70

//swap destruction
var x=1;
var y=2;
//console.log(x,y); //output:1,2
[y,x]=[x,y]; //swap
console.log(x,y); //output:2,1