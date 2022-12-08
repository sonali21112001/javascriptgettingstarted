//unshift
const values = ['a','b','c'];
values.unshift('d','good morning');
console.log(values); //values come before array 'values'

//push
const fruits =['apple','orange','banana','grapes'];
fruits.push('berry','pineapple');
fruits.pop('apple');
console.log(fruits); //push the values in array



//shift
const valueis =['2','6','7','8'];
valueis.shift('3');
console.log(valueis); // 1st value never identified

//slice()
const small = ['a','b','c'];
const newValues = small.slice(2);
console.log(newValues); // finding the value array

//splice()
let green ='20';
const ray = ['a','b','c'];
ray.splice(1,0, green);
console.log(ray); // for inserting values 

//indexOf
const array =['a','b','c','d'];
console.log(array.indexOf('c'));
console.log(array.indexOf('d'));//for finding the number of indexsss

//filter
const fvalues = ['a','b','c'];
const set = fvalues.filter(function(item)
{
    return item >'a';
});
console.log(set); //filter the values with denoted value

//find
const dvalues = ['a','bbb','c'];
const found = dvalues.find(function(item)
{
return item.length > 1;
})
console.log(found);

//sfunction hoisting
console.log(square(5)); // 25

function square(n) {
  return n * n;
}


const app ={
    productId : 1234,
    username :'sonali',
    ordernumber : 789

};
 function showproductId()
 {
    console.log(app.productId);
 }
 showproductId();