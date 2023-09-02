/* Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

let randomValue = getRandomInt(1, 32);
console.log(randomValue);
let a = (1 <= randomValue <= 11) ? randomValue : console.log("");
let b = (12 <= randomValue <= 21) ? randomValue : console.log("");
let c = (22 <= randomValue <= 31) ? randomValue : console.log("");

switch (randomValue) {
    case a:
        console.log('число из первой декады месяца');
        break;
    case b:
        console.log('число из второй декады месяца');
        break;
    case c:
        console.log('число из третьей декады месяца');
        break;        
    default:
        console.log('Похоже вы не с нашей планеты');
        break;
}