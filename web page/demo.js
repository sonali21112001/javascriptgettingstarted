'use strict';
(function(){

    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.age = 29;

    var jin = new Person('jin','Cooper');
    var sofia = new Person('sofia','Cooper');

    Person.prototype - {age: 18};

    let kris = new Person('kris','Cooper');
    
    display(Person.prototype);
    display(jin.age);
    display(sofia.age);
    display =(kris.age);

}) ();