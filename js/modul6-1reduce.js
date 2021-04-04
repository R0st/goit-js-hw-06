'use strict';

// Array.prototype.reduce()
//     - поэлементно перебирает оригинальный массив
    // - возвращает что угодно 
//     - заменяет все на свете, но использовать нужно с умом
console.log('--- Array.prototype.reduce() ---');
//берет много и жделает что-то одно

const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((acc, number) => {     //acc -аккумулятор, как total, и передается в след итерацию
    console.log('number', number);     
    console.log('acc', acc);
    return acc+number;
}, 0);      //начальное значения аккумулятора
console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

// считаем общую зарплату
console.log('--- next ---');

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((total, value) => {
    return total + value;
    },
    0);
console.log(totalSalary);

console.log('--- next ---');
//считаем общее количество часов
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTimePlayed = players.reduce((totalTime, player) => {
    return totalTime + player.timePlayed;
}, 0);
console.log(totalTimePlayed);

//считаем корзину товаров
console.log('--- next корзина товаров --- ');

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0,
);
console.log(totalAmount);

//собираем все теги из твитов
console.log('--- next задача на твиты ---');

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '004', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => {
    // tags.push(...tweet.tags);
    return [...acc, ...tweet.tags];    //распыляем старый аккум а потом распыляем теги
    }, []);    //создаем массив всех тегов

console.log(allTags);
// то есть происходит следующее
//acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
//acc = ['js', 'nodejs'] tweet.tags ['html', 'css'] 
        // return [...['js', 'nodejs'], ...['html', 'css']]
// ['js', 'nodejs', 'html', 'css']

//Ведем статистику тегов
console.log('--- next statistika ---');

//логика такова
//если свойство с ключом tag есть, увеличить его значения на 1
//если свойства нет с таким ключом что в tag, сделать и записать 1  
const tagsStats = allTags.reduce((acc, tag) => {
        console.log(acc);

    //     if (acc[tag]) {     //чтобы не мутировать 
    //         acc[tag] += 1;  //делаем новый обьект в асс
    //         return acc;
    //     }
    //     acc[tag] = 1;
    //     return acc;
    // }, {}); 

    //     console.log(acc);

    //     if (acc[tag]) {     //чтобы не мутировать 
    //         return {
    //             ...acc,
    //             [tag]: acc.tag + 1
    //         };
    //     }
    
    //     acc[tag] = 1;
    //     return {
    //         ...acc,
    //         [tag]: 1
    //     };
    // }, {});     //{} начальное пустое значение асс
    //запишем все через тернарник
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
}, {});
console.log(tagsStats); 