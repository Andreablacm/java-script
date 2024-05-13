// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const number = 5;

number >= 4 ? console.log('el número es mayor o igual a 4') : console.log('El número es menor de 4');

console.log(Math.random() * 10);

console.log(Math.random() * (100 - 50 + 1) + 50);

const randomNumber = Math.floor(Math.random() * 3);

console.log(randomNumber);

//console.log(Math.round(randomNumber));
//console.log(Math.floor(randomNumber));
//console.log(Math.ceil(randomNumber));

//console.log(word.length);

//console.log(word.charAt(3)); le das una posicion y te da la letra

//console.log(word.includes('la'));

//console.log(word.indexOf);

//console.log(word.startsWith('Hol'));

//console.log(word.endsWithsWith('Hol'));

const word = 'Hola y adiós';

const name = 'Keko';

const age = 26;

console.log(`${name} tiene ${age + 1} años `);
