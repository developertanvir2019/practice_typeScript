type User = { userName: string; userId: number };
var users: User[] = [];

var newUser1: User = { userName: 'tanvir', userId: 4 };
users.push(newUser1);

var newUser2: User = { userName: 'kocan', userId: 42 };
users.push(newUser2);

var newUser3: User = { userName: 'Rimon', userId: 23 };
users.push(newUser3);

console.log(users);
