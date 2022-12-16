function greeting(name) {
    console.log('Hello' + name);
}

greeting('john');

function greetings() {
    return 'Hello John!';
}

let message = greetings();
console.log(message);

//function with Arguments
//1

function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(25, 25);
console.log(result);

//2

function greeti(name) {
    console.log('Hello' + '' + name);
}
let name = 'john';
greeti(name);
name = 'Mary';
greeti(name);

//The Argument Object

function printAll() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printAll(1, 2, 3, 4, 5);
printAll(10, 20);

//function scope
//1

function hello() {
    let message = 'Hello';
}
hello();
console.log(message); //referenceError: message is not defined 

//2

function great() {
    let message = 'Hello';
    let SayHi = function hi() {
        console.log(message);
    };
    SayHi();
}
great();

//3
function greate1() {
    let message = 'Hello';
    let sayHi = function hi() {
        let message = 'Hi';
    };
    sayHi();
    console.log(message);
}
greate1();

//block scope

/*let message = "Hello";
if(message === "Hello"){
    let count = 100;
}
console.log(count); */
//Error


//IIFE(Imediately Invoked Function Expression)

(function () {
    console.log("Hello");
})();

//Closures
//1
/*let greetingss = (function(){
    let message = 'Hello';
    let getmessage = function(){
        return message;
    };

})();
console.log(greetingss.message);//Undefined*/

//2
let greeeting = (function () {
    let message = 'Hello';
    let getMessage = function () {
        return message;
    };
    return {
        getMessage: getMessage,
    };
})();
console.log(greeeting.getMessage());

//3
function setupCounter(val) {
    return function counter() {
        return val++;
    }
}
let counter1 = setupCounter(0);
console.log(counter1());//0
console.log(counter1());//1
let counter2 = setupCounter(10);
console.log(counter2());//10
//__________________________________________________________//

//Arrow Function 1
//1
/*let greete = () => {
    return 'Hello World!';
};
let message = greete();
console.log(message);*/

//2
let sum1 = (num1, num2) => num1 + num2;

let output = sum1(10, 5);
console.log(output);

//3
let message1 = {
    name: 'john',
    regularFunction: function () {
        console.log(this)
        console.log('Hello ' + this.name);
    },
    arrowFunction: () => console.log('Hi ' + this.name)
}
message1.regularFunction();
message1.arrowFunction();
console.log(this)
//------------------------------------------------------------------//

//call()

let person1 = { name: 'john', age: 22 }
let person2 = { name: 'mary', age: 26 }
let sayHi = function () {
    console.log('Hi ,' + this.name);
}
sayHi.call();
sayHi.call(person1);
sayHi.call(person2);

//apply

function introduction(name, profession) {
    console.log('My name is' + name + 'and I am a' + profession + '.');
    console.log(this);
}
introduction('john', 'student');
introduction.apply(undefined, ['Mary', 'Lawyer']);
introduction.call(undefined, 'James', 'artist');

//bind()

let person3 = {
    name: 'Mary',
    getName: function () {
        return this.name;
    }

};

let person4 = { name: 'john' };
let getNameCopy = person3.getName.bind(person4);
console.log(getNameCopy);

//eval function

let x = 1;
let y = 2;
let s = 'abc'
console.log(eval('x + y + s'));

//parseInt

console.log(parseInt('F', 16));
console.log(parseInt('15', 10));
console.log(parseInt('Hi', 10));

//parseFloat

console.log(parseFloat('3.99'));
console.log(parseFloat('3.99-1'));
console.log(parseFloat(''));

//escape

console.log(escape('text'));
console.log(escape(''));
console.log(escape('abc&%'));

//unescape

console.log(unescape('text'));
console.log(unescape('%20'));
console.log(unescape('abc%26%25'));
//---------------------------------------------------//

//Default Parameters

/*function sayHi(name = 'World') {
    console.log('Hello ' + name);
}
sayHi();
sayHi('john');*/

//Default Parameters
//1
function sayHi1(name = 'world') {
    console.log('Hello' + name);
}
sayHi1();
sayHi1('John');

//2
function sayHi2(message, name = 'World') {
    console.log(message + " " + name);
}
sayHi('Hello');
sayHi('Hi', 'John');

//rest parameter

/*let sayHi3 = function greet(...names){
    names.forEach(name => console.log('Hi' + name));
}
 greet('Mary','John','James');*/

function greet(message, ...names) {
    //console.log(message + 'everyone!');
    names.forEach(name => console.log
        ('Hi' + name));

}
greet('Welcome', 'Mary', 'John', 'James');

//spread Operator
//1
function greet(person1, person2) {
    console.log('Hello' + person1 + ' and ' + person2);
}
let names = ('John', 'Marry');
greet(...names);
//2
function display(char1, char2, char3, char4) {
    console.log(char1, char2, char3, char4);
}
let letters = 'abcd';
display(...letters);





