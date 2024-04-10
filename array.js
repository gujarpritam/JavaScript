// var arr = [10, 20, 30, 40, 50];

// function helper() {
//     console.log("hello");
// }

// arr.push('hello');
// arr.pop();
// arr.shift();
// arr.unshift(50);
// arr.splice(2, 3, 60, 90);
// console.log(arr);

// var arr1 = arr.slice(1, 3);

// console.log(arr1);

let persons = [{
    firstName: "Pritam",
    age: 23
},
{
    firstName: "Neha",
    age: 13
}
]

let output = persons.filter((item, index, array) => {
    if(item.age>20)
    return item.firstName;
});

console.log(output);

// .map((item)=>{
//     return item.firstName;
// })


// arr.splice(5, 0, person);
// console.log(arr);

// function helper(item, index, array) {
//     console.log(item);
// }
// arr.forEach(helper());

// let arr2 = arr.map((item, index, array) => {
//     return item * 2;
// });

// console.log(arr2);

// var filtered = arr2.filter((item, index, array) => {
//     return item > 60;
// });

// console.log(filtered);

// var sum = arr.reduce((accumulator, curr) => {
//     return accumulator = accumulator + curr;
// }, 0);

// console.log(sum);

let arr=[1, 3, 5];
let arr2=arr;
arr.push(4);
console.log(arr);
console.log(arr2);