'use strict';
// Array.prototype.find()
//     - поэлементно перебирает оригинальный массив
//     - возвращает тпервый элемент удовлетворяющий условию или undefined
console.log('--- Array.prototype.find() ---');


const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);
console.log(number);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//ищем игрока по id
const playerIdToFind = 'player-3';
const playerWithId = players.find(player => player.id === playerIdToFind);
//деструктуризация const playerWithId = players.find(({id}) => id === playerIdToFind);
console.log(playerWithId);

//ищем игрока по имени
const playerNameToFind = 'Poly';
const playerWithName = players.find(player => player.name === playerNameToFind);
console.log(playerWithName);

//оформляем все функцией
console.log('--- ищем игрока по имени ---')

const findPlayerById = (allPlayer, playerId) => {
    return allPlayer.find(player => player.id === playerId);
};
console.log(findPlayerById(players, 'player-1'));
console.log(findPlayerById(players, 'player-4'));

// Array.prototype.every()
//     - поэлементно перебирает оригинальный массив
//     - возвращает true если элементы массива удовлетворяют условие
console.log('--- Array.prototype.every() ---');

const isAllOnline = players.every(player => player.online);
console.log('isAllOnline', isAllOnline);

// Array.prototype.some()
//     - поэлементно перебирает оригинальный массив
//     - возвращает true если хотя бы один элемент массива удовлетворяют условие
console.log('--- Array.prototype.some() ---');

const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline', isAnyOnline);

