let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I am promise and I am fulfilled");
        resolve(true);
    }, 5000);
})

console.log(p1);