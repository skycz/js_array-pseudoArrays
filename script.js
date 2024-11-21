"use strict";

// Массив arr
const arr = [1, 13, 26, 8, 10];
arr.sort(compareNum); 
// arr.sort(compareNum) вызывает метод .sort() на массиве arr и передает в него функцию compareNum.

console.log(arr);

function compareNum(a, b) { // Это работает как сортировка по возрастанию в параметры a и b
    return a - b; // возвращаем результат
}

// ПсевдоМассивы



// Работа с объектами и вложенными объектами
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);


//Работа с функциями, строками, операторами
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Ошибка!'
    } else {
        return str.split('').reverse().join('');
    }
}
reverse(someString);
console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

let allMoney = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0) {
        str = 'Нет доступных валют';
    } else {
        str = 'Доступные валюты:\n';
    }

    for (let value of arr) {
        if (value === missingCurr) {
            continue;
        } else {
            str += `${value}\n`;
        }
    }
    return str;
};

availableCurr(allMoney, 'RUB');
console.log(availableCurr(allMoney, 'RUB'));

/* console.log(arr.length);  */
// arr.length всегда возвращает целое число, которое соответствует количеству элементов в массиве. число [8] в массиве у которого индекс (4), +1 по правилу length 
// в консоль выведется (5)

/* arr.pop(); */ // удаляет последний символ в массиве
/* arr.push(10) */ // добавляет число в конец строки
/* console.log(arr); */

// Конструкция перебора элементов внутри arr

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

// for...of используется для удобного перебора элементов массива

/* for (let value of arr) {
    console.log(value);
} */

// Метод.forEach(), немного похож на предыдущие

const arr = [1, 13, 26, 8, 10];
arr.forEach(function(item, i, arr) { // аргументы внутри функции
    console.log(`${i}: ${item} внутри массива ${arr}`)
    // перебирает индексы, элементы, внутри массива arr
});

/* const str = prompt("", "");
const products = str.split(", ");
// Метод split(): Этот метод используется для разбиения строки на массив подстрок. Он принимает в качестве аргумента разделитель, разделителем является строка ", ", то есть запятая и пробел

products.sort();
// sort() — это метод массива в JavaScript, который сортирует элементы массива на месте и возвращает отсортированный массив.

console.log(products.join('; ')); */
// Метод join() в JavaScript используется для объединения элементов массива в строку, с возможностью указания разделителя между этими элементами.