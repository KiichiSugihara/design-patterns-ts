import Book from "./Book";
import Drink from "./Drink";

const bookSample = new Book(
  {
    productCode: "2001",
    unitPrice: 498,
  },
  { title: "坊っちゃん", author: "夏目漱石" }
);
const drinkSample = new Drink(
  {
    productCode: "1001",
    unitPrice: 298,
  },
  { name: "お酒", isAlcohol: false }
);

console.log(bookSample);
console.log(drinkSample);
