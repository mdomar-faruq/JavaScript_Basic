var javascript={
     name:"javascript",
    libraries:["node.js","react","vue"],
    printliberieas:function(){
     // console.log(this); 
    //var self=this; 
     this.libraries.forEach((a)=> console.log(`${this.name} love ${a}`)); //fat arrow function and don't care of this
    },

};

javascript.printliberieas();