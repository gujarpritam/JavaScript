let teacher = {
    name: "teach"
}

let student = {
    name: "stud",
    info: function () {
        console.log(`${this.name}`);
    }
}

student.info();
//methodToBorrow.call(objectToBorrowFor)
student.info.call(teacher);

