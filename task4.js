// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.


let userNumber = prompt('Задание 4. Введите целое положительное число');
if (userNumber > 999) userNumber %= 1000;
alert(`В вашем числе ${parseInt(userNumber/100)} сотен, ${parseInt((userNumber/10)%10)} десятков и ${userNumber%10} единиц`);

