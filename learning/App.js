/**
 *
 * "Mapping"
 * const arr1 = [5, 1, 3, 6, 7];
 */

/**
 * FIRST WAY-
 *
 * function mapping(value) {
 *   return value * 2;
 * }
 *
 * const newArr1 = arr1.map(mapping);
 * console.log(newArr1);
 *
 *
 * SECOND WAY-
 *
 * const newArr2 = arr1.map((value) => 2 * value);
 * console.log(newArr2);
 *
 *
 * Tricky way mapping:
 *
 *const users = [
 *  { firstName: "Alok", lastName: "Raj", age: 23 },
 *  { firstName: "Ashish", lastName: "Kumar", age: 29 },
 *  { firstName: "Ankit", lastName: "Roy", age: 29 },
 *  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
 *];
 *
 *const users2 = users.map((user) => {
 *  return user.firstName + " " + user.lastName;
 *});
 *console.log(users2);
 */

/**
 * FILTER FUNCTIONS
 *
 */


/** 

const array = [5, 1, 3, 2, 6];

const array2 = array.filter((value) => {
  if (value % 2 === 0) {
    return value;
  }
});
console.log(array2);

const sum = array.reduce((acc, curr) => {
  return (acc += curr);
}, 0);
console.log(sum);

const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const filtered = users
  .filter((user) => user.age < 30)
  .map((user2) => user2.firstName);
console.log(filtered);
*/