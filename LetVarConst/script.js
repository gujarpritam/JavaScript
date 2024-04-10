// arrow function - can be used when there is only one return statement
// let sum = (a, b) => a + b;
// sample();

// var sample = function () {
//     let b = 20;
//     console.log(b);
// }

// ------------------------------------------

// function outer() {
//     let outerVariable = 10;
//     let ans = inner();

//     function inner() {
//         function innerMost() {
//             console.log(outerVariable)
//         }
//         return innerMost;
//     }
//     return ans;
// }

// let ans = outer();
// ans();

// function/global scope of var
// function funct(){
//     var a=10;
// }
// console.log(a);

// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i);

// -------------closures----------------

function outer(){
    let a=10;
    function inner(){
        function innerMost(){
            console.log(a);
        }
        return innerMost;
    }
    let funct=inner();
    return funct;
}

let ans=outer();

ans();