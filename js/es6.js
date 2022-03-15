function add(n, m) {
    let num = [];
    for (const nums of arguments) {
        // num = num + nums;
        num = nums;
    }
    return num
}
const arr = ['s', 'o', 'j', 'i', 'b'];
// const res = add([127685346555])
const res = add([12, 32, 45, 67, 89])
const news = [...res, ...arr];
news[4] = 9
// console.log(news[4]);

for (const n of news) {
    // console.log(n);
}
// console.log(typeof arr);
// console.log(news)
// console.log(res);


const f = (x, y) => {

    const num = [x, y]
    return num
}
// console.log(f(12, 34));

const employe = {
    name: ' sajeeb ',
    age: 24,
    language: ['html', 'css', 'js', 'react'],
    address: ' belabo',
    specification: {
        job: 'web developer',
        ide: 'vs code ',
        fav: ' travelling '
    },
    hobby: 'codeing'
}
const { name, hobby, age } = employe;
// console.log(name);
const { job, ide, fav } = employe.specification
const [htm, css, js, react] = employe.language
// console.log(react, js, htm);
// console.log(ide);

const jsonEmploye = JSON.stringify(employe);
const jsonobj = JSON.parse(jsonEmploye)
// console.log(jsonEmploye);
// console.log(employe);
// console.log(jsonobj);


const products = [

    { name: 'phone', price: 500, brand: 'hp ' },
    { name: 'phone2', price: 600, brand: 'dv' },
    { name: 'phone3', price: 700, brand: 'Aoc' },
    { name: 'phone4', price: 800, brand: 'Acuss ' },
    { name: 'phone5', price: 900, brand: 'androiad' }

]
// console.log(products);
const newPro = { name: 'iPhone ', price: 1100, brand: 'apple' }
const addNewArr = [...products, newPro];
// remove item 
const remaing = products.filter(p => p.brand !== 'dv');
// console.log(remaing);

// console.log(addNewArr);
// 1 variable declaration  var, let ,const 
var myName = 'sajeeb';
let myName1 = 'sajeeb Ahmed';
myName1 = ' Sajeeb AHmed Fida '
const myName3 = ' Sajeeb Ahmed '
// console.log(myName, myName1, myName3);

// 2 consition (<,>,!= ,===, <= , => &&)
const num11 = 500;
const num22 = 700;
if (num11 < num22) {
    // console.log(`${num11} iss Samaller than ${num22}`);
}
else {
    // console.log(`${num22} iss bigger than ${num11}`);
}

if (num11 > num22) {
    // console.log(`${num11} iss biggers than ${num22}`);
}
else {
    // console.log(`${num22} iss bigger than ${num11}`);
}
const assign = '123';
const assign2 = 123;
const assign3 = '123';
if (assign === assign2) {
    // console.log('true');
}
else if (assign === assign3) {
    // console.log('truety');
}
else {
    // console.log('ntg');
}
const myArr = [12, 23, 34, 45, 78, 56, 67, 78, 89];
const length = myArr.length;
myArr.push(55)
myArr.pop()
myArr[3] = 99
const inc = myArr.includes(79)
// console.log(length, myArr[3], myArr, inc);

// 3 use for loop and while loop 
for (const arr of myArr) {
    // console.log(arr);
}

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (i < cars.length) {
    text = cars[i];
    i++
    // console.log(text);
}
// 4 create function , perameter and agruments 
function myFunction(num, num2) {
    const calc = num + num2;
    return calc
}
// console.log(myFunction(4375, 5645));

// 6 object declare incluing array and object 

const myObj22 = {
    name22: 'saju',
    age22: 24,
    address: 'NArsingdi',
    hobby: ['codeing', 'hard Working', 'Learning', 'programming', 'reading documention'],
    goal: 'programmer',
    target: {
        jobs: 'senior web developer at big company ',
        salary: 10000000,
        dream: 'own it fram'
    }
}
// 7 use templeate string 
// 8 spread operator 
// 9 copy an array then add a new element to an array  
const { name22, address, age22, goal } = myObj22;
// console.log(goal);
const hobbys = myObj22.hobby;
// console.log(hobbys[1]);
// console.log(myObj22.target.salary);
const { jobs, salary, dream } = myObj22.target;
// console.log(` this is my big dream carrer build as a ${jobs}`);
// console.log(dream);
const newCars = [...cars, 'Tesla '];
// console.log(newCars);

// 10 use filtter to remove an element form an array 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filter = words.filter(word => word.length > 6)
console.log(filter);