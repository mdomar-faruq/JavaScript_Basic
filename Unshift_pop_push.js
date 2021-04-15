const fruits=['Apple','Mango','orange'];
 /* fruits=[];  called uncoughterror */
fruits[3]='whatermalon';
fruits.push('benana');
fruits.pop(); //last valu delete
fruits.unshift('strawbaries'); //1st insert 
console.log(fruits.indexOf('orange'));
console.log(fruits); 
