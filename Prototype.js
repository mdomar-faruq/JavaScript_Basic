	 //constructor function
 function Person(name) {
  
/*   let childperson=Object.create(Person.prototype);
         childperson.name=name; */

	 this.name = name;
	 } 

 //prototype->javascript jekono function shetar ekta property jeta ekta object ke point kore 
	Person.prototype.getName = function() {
 return this.name;
 } 
	var person = new Person("John Doe");
 console.log(person.getName()); //"John Doe"



 //another example

 //constructor function
 	function Student() { 
	this.name = 'John'; 
	this.gender = 'M';
	 } 
  //prototype->javascript jekono function shetar ekta property jeta ekta object ke point kore 
	Student.prototype={
     age(){
      console.log("50");
     }
 }; 
	
	var studObj1 = new Student(); 
studObj1.age(); 