const ProcesOrder=(customer)=>{
 console.log("Procesing order for customer 1");

/* synchronous behavior:

var currenTime=new Date().getTime();
while(currenTime+3000>= new Date().getTime());
console.log("Order process for customer 1");

-------------------------------------------------------------------------------------------
synchronous way step by step
 -- jodi ekta excution line event(block) hole ,stop code next excution run hove na.
Output: 
take Order for customer 1
Procesing order for customer 1
                    <--waite 3 second--> 
Order process for customer 1
complite order for customer 1 

 */

//Asynchronous behavior
//CallBack 
 setTimeout(()=>{
  console.log("cooking completed");
 },3000);

}
console.log("take Order for customer 1");
ProcesOrder();
console.log("complite order for customer 1");

/*
Asynchronous way step by step
 -- jodi ekta excution line event(block) hole ,not stop Pass next execution(Tai Asynchronous important).

Output:
take Order for customer 1
Procesing order for customer 1
        <-callbak Queue execute,then Send  Web API process->
complite order for customer 1
       <-Web API process end, even loop(compaire call stack and call back queue) execuction complite->
cooking completed 
*/


