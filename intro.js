// Intro
let age = 42;

let year = 2023;
console.log(age, year);
age = 43;
console.log(age, year);
const school = 'Open University';
console.log(`School ${school}`);
var score = 100;
console.log(`Score ${score}`); 

// Strings:
let word = 'Hello, World!';
console.log(word);
let email  = 'ssaida@gmail.com';
let firstName = 'Samer';
let lastName = 'Saida';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName[0].toLowerCase());
console.log(fullName[1].length);
console.log(fullName[2].lastIndexOf('m'));
// string methods:
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName);
let index = fullName.indexOf('a');
console.log(index);
index = fullName.lastIndexOf('a');
console.log(index);
console.log(fullName.slice(2, 5));
console.log(fullName.substring(2, 5));
console.log(fullName.replaceAll('S', 'X'));
// Numbers:
let radius = 10;
let pi = Math.PI;
console.log(radius, pi);
console.log(Math.PI)
console.log(radius / pi);
console.log(radius * pi);
// NaN - Not a Number:
console.log(5 * fullName);
console.log('THhe bog has ' +10+' likes');
// with template string:
console.log(`The blog has ${10} likes`);
const title = 'Javascript Final Review';
const auther = 'Samer Saida';
const likes = 30;
let template = `This title ${title} by ${auther} has ${likes}likes`;
console.log(template);
let html = `
    <h1>${title}</h1>
    <p>by ${auther}</p>
    <span>has ${likes}</span>
`;
console.log(html);
// Arrays:
let names = ['Samer Saida','Fares Halahlih','Omar Assi'];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
console.log(names.join(' - '));
names[0] = 'Omar Saida';
console.log(names.join(' - '));
let numbers = [20, 25, 30, 35];
console.log(numbers[2]);
// Array Methods:
let result = names.join(' - ');
console.log(result);
result = names.indexOf('Omar Saida');
console.log(result);
result = names.concat(['Wahad Saida', 'Mosa Saida']);
console.log(result);
result = names.push('Net Ninja');
console.log(result, names);
result = names.pop();
console.log(result, names);
// type conversion
let number = 25;
console.log(number == 25);
console.log(number == '25');
console.log(number != 25);
console.log(number != '25');
console.log('----')
console.log(number === 25);
console.log(number === '25');
console.log(number !== 25);
console.log(number !== '25');
// Casting
let num = 100
num = Number(num);
// num = String(num);
console.log(num + 1);
console.log(typeof num);
result = Number('hello');
console.log(`${typeof result} ${result}`);
console.log(Number(`${fullName}`));
console.log(String(100));
console.log(100);