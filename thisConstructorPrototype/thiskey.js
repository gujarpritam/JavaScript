// VIMP Ex

// function dummy() {
//   console.log(this);

//   function callback() {
//     console.log(this);

//     let func = () => {
//       console.log(this);
//     };

//     func();
//   }

//   callback();
// }

// let obj = {
//   property1: "value",
//   method: dummy,
// };

// obj.method();
// ----------------------------------
let callback = () => {
  console.log(this);
};

function dummy() {
  console.log(this);

  callback();
}

let obj = {
  property1: "value",
  method: dummy,
};

obj.method();

// --------------------------------------
// let teacher = {
//     name: "abc",
//     age: 49
// }

// let student = {
//     name: "pritam",
//     age: 27,
// }

// function info(details) {
//     console.log(details, this.name, this.age);
// }

// info.call(teacher, "details of a teacher are:");
// info.call(student, "details of a student are:");
// ---------------------------------------
// const func1 = function () {
//     console.log(this);
// }

// const func2 = () => {
//     console.log(this);
// }

// let obj = {
//     property: "value1",
//     func3: func1,
//     func4: func2
// }

// obj.func3();
// obj.func4();
// --------------------------------
// function callback() {
//     console.log(this);
// }

// let callback = () => {
//     console.log(this);
// }

// function dummy(callback) {
//     callback();
//     console.log(this);
// }

// let obj = {
//     property1: "value",
//     method: dummy
// }

// obj.method(callback);
// ---------------------------------------

// let callback = () => {
//     console.log(this);
// }

// function dummy(() => {
//     console.log(this);
// });

// ----------------------------------------
// let obj = {
//     property1: "value",
//     method: () => {
//         console.log(this);
//     }
// }

// obj.method();
// ------------------------------

// let callback = () => {
//     console.log(this);
// }
