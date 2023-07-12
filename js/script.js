

const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];

const everyResult = users.every(item => item.length > 4);

console.log(everyResult);

const someResult = users.some(item => item.length > 4);

console.log(someResult);

const capsUsers = users.map(item => item.toUpperCase());

console.log(capsUsers);


