define(['jquery'],function($){

  function Person(name){
    this.name = name;
  }

  Person.prototype.sayName = function(){
      console.log(this.name);
  }

  return Person;
})