// function sumOfTwoNumbers(a,b){
//     const sum=a+b;
//     console.log(sum);
// }

// const a=10;
// const b=20;
// sumOfTwoNumbers(a,b);

// const c=50;
// const d=10;
// sumOfTwoNumbers(c,d);

// const e=60;
// const f=30;
// sumOfTwoNumbers(e,f);
// const square = function(num){
//     return num*num;
// }
// console.log(square);

// function addSquare(a,b){

//     const sa = square(a);
//     const sb = square(b);

//     function square(num){
//         return num*num;
//     }
//     return sa +sb ;
// }
// console.log(addSquare(4,3));

// function variable(count){
//     for(i=0;i<count;i++)
//         console.log("hello world");
// }
// variable(5);

// const square = (num)=> num*num
// console.log(square(4));

//first method

// const calculate = (a,b,operation)=>{

//     return operation(a,b);

// };

// const addition = calculate( 4,5, function(num1,num2){
//     return num1 + num2;
// });
// console.log(addition);

// // second method

// const subtraction = (a,b)=> a-b;

// const subResult = calculate(8,4,subtraction)

// console.log(subResult);

// // third method

// function multiply(a,b){
//     return a*b;
// }
// const mulResult = calculate(4,5,multiply);

// console.log(mulResult);

const a = [1,5,8,6,3,7,-5,-9,7,-2];

// const firstNegativeNo = (num)=>{

//     return num < 0;
// }
// const value = a.findIndex(firstNegativeNo)
// console.log(value);

// a.forEach((num,i)=>{
//     console.log("array num",num,i);
// })
// console.log("hello");

// setTimeout( function (){
//     console.log("print later")
// },10000);

// console.log("world");
// console.log("three");

// function getChees(callBack){
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log('here is cheese',cheese);
//         callBack(cheese) ;
//     }, 2000);
// }

// function makeDough(cheese,callBack){
//     setTimeout(() => {
//         const dough = cheese + "🍩";
//         console.log('here is dough',dough);
//         callBack(dough);
//     }, 2000);
// }

// function makePizza(dough,callBack){
//     setTimeout(() => {
//         const pizza= dough + "🍕";
//         console.log('here is pizza',pizza);
//         callBack(pizza);
//     }, 2000);
// }

// getChees((cheese)=>{
//     makeDough(cheese,(dough)=>{
//         makePizza(dough,(pizza)=>{
//             console.log("got the pizza",pizza)

//         })
        
//     })
//     // console.log("got the cheese",cheese)
// });

const ticket = new Promise((resolve, reject) => {
    const isBoard = true;

    if(isBoard){
        resolve("you are not in the flight");
    }
    else{
        reject("your flight has been cancelled");
    }
});

ticket
.then((data) =>{
    console.log("wooh",data);
})
.catch((data) =>{
    console.log("oh no",data);
})
.finally(() =>{
    console.log("i will always be executed");
});

