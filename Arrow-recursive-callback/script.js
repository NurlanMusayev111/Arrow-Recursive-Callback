"use strict";

// const sum = function(a,b){
//     return a+b;
// }

// const sum = (a,b) =>{
//     return a+b;
// }

// console.log(sum(3,5));


// function test(){
//     for(let i = 0 ; i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }


// const test = () =>{
//     for(let i = 0 ; i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }

// test(1,3,4,5);



// function test(){
//     console.log(this);
// }

// const getSum = () =>{
//     console.log(this)
// }

// getSum();
// test();



// let stu = {
//     name:"Nurlan",
//     surname:"Musayev",
//     age:20,
//     fullName:()=>{
//         console.log(this);
//     },

//     fullData:function(){
//         console.log(this);
//     }
// }



// stu.fullName();
// stu.fullData();



// document.querySelector("button").addEventListener("click",function(){
//     this.style.backgroundColor = "blue";
// })

// let elems = document.querySelector("ul li");

// elems.forEach(elem=> {
//     elem.addEventListener("click",function(){
//         console.log(this.innerText);
//     })
// });



// function showResult(num1,num2){
//     let str = "Your result :";
//     let res = sum(num1,num2);

//     console.log(str + " " + res)
// }


// function sum(a,b){
//     return a + b;
// }


// showResult(3,6);



// function showNums(firstNum){
//     console.log(firstNum);
//     let nextNum = firstNum - 1;

//     if(nextNum > 0){
//         showNums(nextNum);
//     }
// }


// showNums(5);

// function getFactorial(num){
//     let nextNum = num - 1;

//     if(num === 0 || num === 1){
//         return 1;
//     }

//     return num * getFactorial(nextNum);
// }


// console.log(getFactorial(5));



function sumOdd(item){
    return item % 2 == 1;
}


function sumEven(item){
    return item % 2 == 0;
}


function sumNums(arr,callback){
    let sum = 0;

    for (const item of arr) {
        if(callback(item)){
            sum += item;
        }
    }


    return sum;
}


// function sumOddNums(arr){
//     let sum = 0;

//     for (const item of arr) {
//         if(item % 2 == 1){
//             sum += item
//         }
//     }

//     return sum;
// }


// function sumEvenNums(arr){
//     let sum = 0;

//     for (const item of arr) {
//         if(item % 2 == 0){
//             sum += item
//         }
//     }

//     return sum;
// }

const numbers = [1,2,3,4,5,6];

// console.log(sumOddNums(numbers));
// console.log(sumEvenNums(numbers));

console.log(sumNums(numbers,sumOdd));
