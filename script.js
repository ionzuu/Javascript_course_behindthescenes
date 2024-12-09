'use strict';

const restaurant = {
  name: 'Classico Italiano',
  Location: '3711 Claysford CT',
  categories: ['Italian', 'Pizzeria', 'Vegetarian'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`
      Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be deliverd to ${address} at ${time}
      `);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: '3711 Claysford Court, Arlington, Texas, United States',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '2172 RockWALL st',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// // Mutating variables
// let r = 111;
// let s = 999;
// const obj = { r: 23, s: 7, t: 14 };

// ({ r, s } = obj);
// console.log(r, s);

// Nested Obkects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching vars
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return valies from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
const [k, , [l, m]] = nested;
console.log(i, j);
console.log(k, l, m);

// Default values
const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r);

const arrr = [7, 8, 9];
const badNewArr = [1, 2, arrr[0], arrr[1], arrr[2]];
console.log(arrr);
console.log(badNewArr);

const newArr = [1, 2, ...arrr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mainMenuCopy);

const str = 'Jona';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
