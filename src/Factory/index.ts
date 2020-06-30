import Product from "./Product";
const productList = [
  new Product({
    productCode: "0001",
    title: "Just for Fun",
    author: "Linus Torvalds",
    unitPrice: 1500,
  }),
  new Product({
    productCode: "0002",
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    unitPrice: 1000,
  }),
];

productList.forEach((p) => {
  console.log(p.getTaxIncludedPrice());
});
// 1650
// 1100
