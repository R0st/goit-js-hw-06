'use strict';

//Array.prototype.forEach(callback(currentValue, index, array), thisArg)
// -- поэлементно перебирает оригинальный массив
// -- ничего не возвращает
// -- заменяет классический for, если не нужно прерывать цикл
console.log('---Array.prototype.forEach(callback(currentValue, index, array), thisArg)---');
const numbersEach = [5, 10, 15, 20, 25];
numbersEach.forEach(function (number) {
    console.log('number', number);
    // console.log(this);
},
    // { a: 5, b: 10 },    //в основном this не используется
);
console.log(numbersEach);

/*Array.prototype.map()
    - поэлементно перебирает оригинальный массив
    - не изменяет оригинальный массив
    - возвращает новый массив такой же длины
*/
console.log('---Array.prototype.map()---')
const numbers = [5, 10, 15, 20, 25];
const doubleNums = numbers.map(function (number) {
    console.log(number);      //вызывается столько раз стьолько элементов в массиве
    return number * 2;
});
console.log('numbers', numbers);
console.log('doubleNums', doubleNums);

console.log('--- next ---');
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//Получаем массив имен всех игроков
const playerNames = players.map(player => player.name);     //неявный возврат
console.log('playerNames', playerNames);

//Список id
const playerIds = players.map(player => player.id);
console.log('playerIds', playerIds);

//вызвать список  с 2 обьектов
const res = players.map(({name, online}) => ({name,online}));
console.log('res', res);

//Увеличиваем кол-во поинтов каждого игрока на 10%
console.log('--- next ---');
const updatePlayers = players.map(player => {
    console.log(player);

    return {
        ...player,      //распыляем, или делаем копия нашего обьекта
        points: player.points * 1.1,    //заменили или увеличили на 10% свойства определеного обьукта
    };
});
console.table(updatePlayers);

//увеличиваем коли-во часов по id

const playerIdToUpdate = 'player-3';

const updatePlayersNew = players.map(player => 
    // if (playerIdToUpdate === player.id) {
    //     console.log('Вот мы нашли того, кого нужно обновить');
    //     return {
    //         ...player,
    //         timePlayed: player.timePlayed + 100,
    //     };    //'это будет обновленный  обьект'
    // }
    // return player;  //'это старый  обьект'
    playerIdToUpdate === player.id
        ? { ...player, timePlayed: player.timePlayed + 100, }
        : player;
);

console.table(updatePlayersNew);


