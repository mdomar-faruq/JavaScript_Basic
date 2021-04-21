//Promise use hoi konu ekta Asynchronous opartion result ke handle kora jornu
//not successfull promises JavaScript bola hoi Rejected and success ke bola hoi resolved

const promise1=Promise.resolve(`Promise 1 resolve`);
const promise2=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve(`promise 2 resolve`);
   },3000);
});

/* promise1.then((result)=>console.log(result)); //single kore
promise2.then((result)=>console.log(result)); */  

////promise.all-> 2 ta ekshate , promise.race-> jeta age ase seta print
Promise.all([promise1,promise2]).then((result)=>{
 console.log(result);
});