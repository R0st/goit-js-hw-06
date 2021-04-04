'use strict';

// Array.prototype.filter()
//     - поэлементно перебирает оригинальный массив
//     - возвращает новый массив(с элементами или пустой)
//     - добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек ф
//         - если коллбек вернул  true элемент добавляется в возвращаемый массив
//         - если false элемент НЕ добавляется в возвращаемый массив
console.log('---Array.prototype.filter()---');

const numbers = [5, 10, 15, 20, 25];
const filteredNumbers = numbers.filter((number) => {
    console.log(number);
    return number > 15;     //любое условие лишь бы вернуло true или false
});
console.log(filteredNumbers);


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
//получить массив всех оналйн игроков
const onlinePlayers = players.filter(player => player.online);
console.table(onlinePlayers);

//получить массив всех оффлайн игроков
const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

//получаем список игроков с временем больше 250
const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.table(hardcorePlayers);

