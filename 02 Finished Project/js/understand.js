//creating 

var obj = {};
var obj = new Object();              //object
var obj = Object.create(null);

var map = new Map();                  //map

//Getting

obj.id
obj['id']                           //object

map.get(1)                         //map

//Checking

Object - var isExist = obj.id === undefined;
isExist = 'id' in obj;              //object

map.has(1);                            //map

//Adding

obj['gender'] = 'female';
obj.gender = male;                 //object

map.set(4,5);                         //map

//Size

console.log(Object.keys(obj).length);    //object

console.log(map.size);                     //map

