function myfunction() {
    console.log(" Arithmatic Operators ")
    //arithmatic operator
    let a = 10;
    let b = 20;
    console.log("a + b = ", a + b)
    console.log("a - b = ", a - b)
    console.log("a / b = ", a / b)
    console.log("a ** b = ", a ** b)
    console.log("a % b = ", a % b)
}

function Assign() {
    console.log("Assignment Operator")
    let c = 45;
    c += 5 //same as 'c' = 'c' + 5
    console.log("c is now =", c)
    c -= 5 //same as 'c' = 'c' - 5
    console.log("c is now =", c)
    c /= 5 //same as 'c' = 'c' / 5
    console.log("c is now =", c)
    c *= 5 //same as 'c' = 'c' * 5
    console.log("c is now =", c)
    c %= 5 //same as 'c' = 'c' % 5
    console.log("c is now =", c)
}

function Comparison() {
    console.log("Comparison Operator")
    let value1 = 8;
    let value2 = 4;
    console.log("value1 == value2 is", value1 == value2)
    console.log("value1 != value2 is", value1 != value2)
    console.log("value1 === value2 is", value1 === value2)
    console.log("value1 !== value2 is", value1 !== value2)
    console.log("value1 > value2 is", value1 > value2)
    console.log("value1 < value2 is", value1 < value2)
    console.log("value1 >= value2 is", value1 == value2)
    console.log("value1 <= value2 is", value1 == value2)
}

function Logic() {
    console.log("Logical operator")
    let x = 5;
    let y = 6;
    console.log(x < y && x == 5)
    console.log(x > y || x == 5)
    console.log(!false)
    console.log(!true)
}

function ifelse() {
    let a = prompt("Hey What is Your Age?")
    a = Number.parseInt(a) //converting the string to a number

    if (a > 0 && a < 8) {
        alert("this is a  invalid Age");
    }

    else if (a < 10) {
        alert("You Are a kid and you cannot even think of driving ");
    }
    else if (a < 18 && a >= 9) {
        alert("You Are a kid and You think of driving after 18");
    }
    else {
        alert("You Can now drive as you are above 18");
    }

}



function switch1() {
    const expr = "Rose";
    switch (expr) {

        case "Rose":
            console.log("Roses are Red..");
        case "Aster":
            console.log("Aster is white..");

        case "Lily":
            console.log("Lily is Yellow..");

        case "habiscus":
            console.log("Habiscus is red..");

        default:
            console.log("There is no Flowers Available !");

    }
}
function forloop() {
    let sum = 0;
    let n = prompt("Enter the Value of 'n'")
    n = Number.parseInt(n)
    for (let i = 0; i < n; i++) {
        sum += (i + 1)
    }
    console.log("sum of first " + n + " natural numbers is" + sum)
}


function whileloop() {
    let n = prompt("Enter the Value of 'n'")
    n = Number.parseInt(n)
    let i = 0;
    while (i < n) {
        console.log(i+1);
        i++;
    }

    
}

function Dowhileloop() {
    let n = prompt("Enter the Value of 'n'")
    n = Number.parseInt(n)
    let i = 0;
    do {
        console.log(i+1);
        i++;
        
    } while (i < n);

}

function hifunction(){
const hello = () =>{
    console.log("Hey hello!")
    return "hi"
}

function oneplusavg(x ,y){
    return 1 + (x + y) / 2
}

const sum = (p, q) => {
    return p +q
}
let a = 3;
let b = 4;
let c = 5;
let v = 'hello'
console.log(v);
console.log("One plus average of a and b is",oneplusavg(a,b))
console.log("One plus average of b and c is",oneplusavg(b,c))
console.log("One plus average of a and c is",oneplusavg(a,c))
console.log(sum(9,7))
}