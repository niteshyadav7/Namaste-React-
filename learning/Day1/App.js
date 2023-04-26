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

// const App = () => <div>Hello World!</div>;
// const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);
// root.render(<App />);

/**
 * Temperature Converter
 *
 * Temperature in fahrenheit: 12;
 * Temperature in celsius:--
 *
 * Formula: C=5/9(f-32)
 */

/** 
function fTc(f) {
  const formula = 5 / 9*(f - 32);
  return formula;
}

const Converter = () => {
  const heading = "Temperature Converter";
  const fahrenheit = 12;

  return (
    <>
      <h1>{heading}</h1>
      <h3>Temperature in fahrenheit: {fahrenheit}</h3>
      <h3>Temperature in celsius: {fTc(fahrenheit)}</h3>
    </>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<Converter />);
*/

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** 
const App = () => {
  const heeading = "ES6 Array Iteration Method";
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
   <>
   {numbers.filter((num)=>num%2===0).map((num,index)=><p key={index}>{num}</p>)}
   </>
  );
};
*/

/**const App = () => {
  const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
  ];
  
  const sum=itemsSold.reduce((acc,curr)=>{
   return acc+curr.price; 
  },0)
  return (
    <>
      <h1>Record of Solid Items</h1>
      <table className="table">
        <caption>Table</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Selling Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemsSold.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total Revenue</th>
            <td colSpan="3">${sum}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
 */

// const App =()=>{
//   const name=false
//   return(
//     <div>
//       <h1>Hello {name?"Nitesh":"guest"}</h1>
//       <h3>{name||"Nitesh"}</h3>
//       <h3>{name&&"Nitesh"}</h3>
//     </div>
//   )
// }

// const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);
// root.render(<App />);
