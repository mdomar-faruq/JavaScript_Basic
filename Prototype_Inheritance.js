//constructor function
//Parents class
function Person(name,age){
 this.name="jamal";
 this.age=28;
}
//constructor function
 //Sub class
function football(type,country,name){
 Person.call(this); //Inherits parents class
 this.name=name; //**modifi parents name,that is polymarprizom
 this.type=type;
 this.country=country;
}

Person.prototype={
    studiam: function(){
       console.log(`${this.country}- studieam near by Gulistan`);
    },
};

football.prototype=Object.create(Person.prototype);   //Use Master object  
//football.prototype.constructor=football;  //football constructor ke override kortesi

let obj=new football('CB','Bangladesh','jamal Buiea');
console.log(obj); //football {name: 'jamal Buiea', age: 28, type: 'CB', country: 'Bangladesh'}
console.log(obj.studiam()); //Bangladesh- studieam near by Gulistan

