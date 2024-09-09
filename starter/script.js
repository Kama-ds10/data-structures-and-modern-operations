'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Es6 enhance object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    // console.log(obj);
    // console.log(
    //   `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is delicious pasta with ${ing1},${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// worrking with strings

// split and join
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Kama Seleye-fubara'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));

    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('kama seleye fubara');

// padding a string
const message = 'Go to gate 10';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditcard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditcard(18893447746653));
console.log(maskCreditcard(946653));
console.log(maskCreditcard('99883737737737737372782'));

// repeat
const message2 = 'Bad weather... All Departues delayed....  0';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// console.log(message.);

/* 

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in a name
const passenger = 'kAma';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// comparing emails

const email = 'kamazd1234@gmail.com';
const loginEmail = '  Kamzd1234@Gmail.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// boolenas (startwith and endwith)
const plane = 'Air A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('zalkky'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// indexof method
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log(`You got lucky`);
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('10E');


Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/* 

// 1)
const events = new Set([...gameEvents.values()]);
console.log(events);
// 2)
gameEvents.delete(64);
console.log(gameEvents);
// 3)

console.log(
  `An event happened, On average, every ${90 / gameEvents.size} minutes`
);

// 4)
for (const [eventx, x] of gameEvents) {
  if (eventx <= 45) {
    console.log(`[first Half] ${eventx}:${x}`);
  } else {
    console.log(`[Second Half] ${eventx}:${x}:`);
  }
}

// corection
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'First' : 'Second';
//   console.log(`[${half} HALF] ${min}:${event}`);
// }

const question = new Map([
  ['question', 'What is the best programming language in world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

// converting object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(restaurant));

console.log(hoursMap);

// for loop with maps
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt(`Your answer`));
// console.log(answer);
const answer = 3;

console.log(question.get(question.get('Correct') === answer));

// convverting to arrays
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'firemze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('Categories', ['italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('close')));

console.log(rest.has('name'));

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
//  set
// it is a collection of unquie variables that cant be reused

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('kamz'));
// for set it is size and not length

console.log(ordersSet.size);

// has and not include
console.log(ordersSet.has('bread'));
ordersSet.add('yam');
console.log(ordersSet);
oordersSet.delete('Pizza');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// function roundTo(n, step = 2) {
//   // console.log('Hello ' + who);
//   let remainder = n % step;
//   return n - remainder + (remainder < 2 / 2 ? 0 : step);
// }
// console.log(roundTo(10));
// let num = 100;

// let rep = 3;

// let theNumber = Number(prompt(`Pick a number`));
// console.log(`Your number is the square root of ` + theNumber * theNumber);
///////////////////////////////////////
// Coding Challenge #2

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
      
      GOOD LUCK 😀
      */
/* 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
for (const [x, el] of game.scored.entries()) {
  console.log(`Goal ${x + 1} : ${el}`);
}
// 2_)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3_)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
  // console.log(team, odd);
}

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// property name
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are opened ${properties.length} days:`;

for (const day of Object.keys(openingHours)) {
  // console.log(day);
  openStr += ` ${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entrries property
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// with optional chaining
console.log(restaurant.openingHours.mon?.open); //single

// multiple optional chaininng
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, We open at ${open}`);
}

// optional chainning on methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //exists

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //doesn't exist

// optional chainning on arrays
const users = [{ name: 'Kama', email: 'kamazd1234@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');

// ??(otherwise the meaning of ??)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

for (const items of menu) console.log(items);

for (const [i, el] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1}:${el}`);
}

// console.log([...menu.entries()]);

///////////////////////////////////////
// Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};




// 1

const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to Win');
// logical assignment operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  // numGuests : 20,
  owner: 'Giovanni Rossi',
};

// OR assignent operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operators (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignent operator
// rest1.owner = rest1.owner && "<Annoymous>";
// rest2.owner = rest2.owner && "<Annoymous>";

rest1.owner &&= '<Annoymous>';
rest2.owner &&= '<Annoymous>';

console.log(rest1);
console.log(rest2);
// nullish coalescing opeator

// restaurant.numGests = 0;
const guests = restaurant.numGests || 10;

console.log(guests);

// nullish: null and undefined (Not 0 or '' )
const guestCorrect = restaurant.numGests ?? 10;
console.log(guestCorrect);

// short circuiting

// they can use an data, data tpe, return any data types,short-circuiting
console.log('.......OR.......');

restaurant.numGests = 23;
const guest1 = restaurant.numGests ? restaurant.numGests : 10;
console.log(guest1);

const guest2 = restaurant.numGests || 10;
console.log(guest2);

console.log('.......AND.......');

// practical examples
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

console.log(0 && 'kaama');// falsy[1]
console.log(0 || 'kaama');// truthy[1]

// 1) destructing
// spread pattern because on the right side of =
const arr = [1, 2, ...[3, 4]];

// // rEST,pattern because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherfood);

// objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(2, 3, 4, 4, 56, 3);

const x = [22, 5, 7];
add(...x);
// console.log(x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
// spread operatorr
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables are arrays,strings,maps,sets but NOT objects

const str = 'Seleye-fubara';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);

// real worrld example
const ingredients = [
  // prompt(`let's make pasta ingredient 17`),
  // prompt(`ingredient 27`),
  // prompt(`ingredient 3`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// object
const newRestaurant = { foundedIn: 2001, ...restaurant, founder: 'Kama' };
console.log(newRestaurant);

// making changes
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Selema';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// destructing objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default setting(menu)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested obj
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested distructing

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default value of vaiables
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
