// var element = document.querySelectorAll('div h1');
// console.log(element[0].innerText);

// var buttons = getElementsByTagName('button');
// function

// console.log(buttons[0]);

let element = document.querySelectorAll('div h1');
console.log(element[0]);
console.log(element);

console.log(element[0].innerHTML);
element[0].innerText = 'changed with help of JS';

console.log(typeof element);
console.log(typeof element[0]);

// element[1].style.color = 'red';
element[0].style.fontSize = '49px';

let pElement = document.createElement('p');
pElement.setAttribute('fontSize', '50px');
pElement.innerHTML = "hello";
console.log(pElement);
// document.body.appendChild(pElement)

element[1].setAttribute('color', 'blue');

// let button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', () => {
//     document.body.appendChild(pElement)
//     document.body.style.backgroundColor = 'red'
// })
// element[1].style.display = 'none';

let i = 0;

// creates new p tags and attaches to doc
// let button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', () => {
//     i++;

//     let pEle = document.createElement('p');
//     console.log(pEle);
//     pEle.innerText = i;
//     document.body.appendChild(pEle);
// })


// ----------------printing in same element-------------
// let button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', (event) => {
//     i++;
//     console.log(event);
//     let pEle = document.getElementsByTagName('p');
//     console.log(pEle);
//     pEle[0].innerText = i;
//     document.body.appendChild(pEle[0]);
// })

let img=document.createElement('img');
document.body.appendChild('img');