
function modifier(strings, ...values){
 /* console.log(strings); // ['We have ', ' and ', ' in our football team.', raw: Array(3)]
    console.log(values); //['CR7', 'messi'] */
    const m=strings.reduce((prev,current)=>{ //reduce()->EK ta single line reduce kora lagbe 
     //return prev+current; //->We have  and  in our football team.
     return prev+current+(values.length ? "*"+values.shift():"");
    },"");
      //1st= prev ->null:("") + current->(we have) + ?o *CR7
      //2nd=prev->(We have *CR7) + current and + ?o-> *messi
      //3rd=prev ->(we have *cr7 and *messi) + current->(in our football team) + ?0-> null("")
      //....We have *CR7 and *messi in our football team.
    return m;
}

var player1='CR7';
var player2='messi';

console.log(modifier`We have ${player1} and ${player2} in our football team.`);

//output: We have *CR7 and *messi in our football team.