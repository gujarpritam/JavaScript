var person = Object.create({
  name: "Pritam",
  surname: "Gujar",
  age: 25,
  sleeps: function () {
    console.log("sleeping");
  },
});

function func(obj) {
  obj.name = "Bharati";
  console.log("hello within func", obj);
}

// console.log(person);

let person2 = {
  name: "Neha",
  surname: "Gujar",
};

func({ ...person2 });

console.log("outside func", person2);

// for (let i in person) {
//     console.log(`value: ${person}.${i}`);
// }

// console.log(person.name);
// console.log(person['age']);
// person.age = 90;
// console.log(person['age']);

// delete person.age;
// console.log(person['age']);

// console.log(person);
// person.sleeps();

// person.name = 'Monica';
// console.log(person['name']);

// for (var i in person) {
//     console.log("key:", i, "& value:", person[i]);
// }

// for (var i in person) {
//     console.log(`key: ${i} & value: ${person[i]}`);
// }

// string = "This is my name";

// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }

// var b = {
//     key: 10
// }

// let a = b;
// b.key = 30;

// console.log(b.key, a.key);
