// let hello = function (username, dummy) {
//     dummy();
//     console.log('Hello ' + username);
// }

// hello("pritam", dummy);

// let name = hello('Pritam');

// console.log(name);

// console.log(a)
// let a = 8;

//declaration
// function dummy() {
//     console.log('dummy');
// }

//expression
// var dummy2 = function (fn) {
//     fn();
//     console.log('dummy2 exe');
// }

// dummy();

// dummy2(dummy);
// console.log(dummy2);

// let arr1=[1,2,3, 4, 5,5];
// function isOdd(x) {
//     return x;
// }

// let arr2 = arr.filter(isOdd);
// console.log(arr2);

// function isOdd2(x) {
//     return x;
// }

// console.log(arr.map(isOdd2));

// function toBinary(x) {
//     return x.toString(2);
// }

// console.log(arr.forEach(toBinary));

// let arr = [2, 4, 5, 8, 1, 17];

// const ans = arr.reduce((max, item) => {
//     if (max < item) {
//         max = item;
//     }
//     return max;
// }, 0);

// console.log(ans);

// let arr2 = [
//     { firstName: "Anu", age: 55 },
//     { firstName: "Pritam", age: 21 },
//     { firstName: "neha", age: 12 }
// ];

// let ans2 = arr2.filter((item) => {
//     let value;
//     if (item.age < 20) {
//         value = item.firstName;
//     }
//     return value;
// }).map((item) => {
//     return item.firstName;
// });

// console.log(ans2);

// let ans = arr2.reduce((result, item) => {
//     if (item.age < 30)
//         result = item.firstName;
//     return result;
// }, []);

// console.log(ans);
//------------------------------------
// function dummy2(){
//     console.log("dummy2");
// function dummy(){
//     console.log("dummy");
// }
// return dummy;
// }

// var ans=dummy2();
// ans();
//-----------------------------------

// let arr=[{firstName: "Pritam"}, {firstName: "Neha"}, {firstName: "bharati"}];

// arr.forEach((item)=>{
// console.log(item.firstName);
// })

// function dummy() {
//   console.log("Dummy function declaration");
// }

// var dummy2 = function (func) {
//   func();
//   console.log("dummy fun expression");
// };

// dummy2(dummy);
//=======================================
//map

let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.map((item) => {
  if (item > 3) return item;
});

console.log(newArr);
