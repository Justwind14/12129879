/* Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */

const num1 = prompt('Задание 1. Введите число');
let isDigit = /\d/.test(num1); // регулярка для проверки содержит ли переменная хотя бы одну цифру, потому что isNan может сконвертить в 0 некотоыре вводные
(isNaN(num1) && !isDigit) ? alert('То, что вы ввели не является числом. Введите именно ЧИСЛО')  :
(num1 <= 1) ? alert('Ваше число меньше либо равно 1') : alert('Ваше число больше 1');

const num2 = prompt('Задание 1. Введите число снова');
isDigit = /\d/.test(num2);
(isNaN(num2) && !isDigit) ? alert('То, что вы ввели не является числом. Введите именно ЧИСЛО') :
(num2 >= 3) ? alert('Ваше число больше либо равно 3') : alert('Ваше число меньше 3');

/* Задание 2
Перепишите код к тернарному оператору
let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
} */

let test = true;
(test === true) ? console.log('+++') : console.log('---');



