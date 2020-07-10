import Book from "../TemplatePattern/Book";
import Drink from "../TemplatePattern/Drink";

const bookSample = new Book(
  {
    productCode: "2001",
    unitPrice: 498,
  },
  { title: "坊っちゃん", author: "夏目漱石" }
);
const drinkNonAlcohol = new Drink(
  {
    productCode: "1001",
    unitPrice: 298,
  },
  { name: "ノンアルコール", isAlcohol: false }
);
const drinkAlcohol = new Drink(
  {
    productCode: "1002",
    unitPrice: 298,
  },
  { name: "アルコール", isAlcohol: true }
);

test("Template Product Class", () => {
  // try Book
  expect(bookSample.productCode).toBe("2001");
  expect(bookSample.unitPrice).toBe(498);
  expect(bookSample.getTaxIncludedPrice()).toBe(
    Math.floor(498 * ((100 + 10) / 100))
  );
  // try Drink
  expect(drinkNonAlcohol.productCode).toBe("1001");
  expect(drinkNonAlcohol.unitPrice).toBe(298);
});

test("Book Class", () => {
  // unique Property
  expect(bookSample.title).toBe("坊っちゃん");
  expect(bookSample.author).toBe("夏目漱石");
});

test("Drink Class", () => {
  // unique Property
  expect(drinkNonAlcohol.name).toBe("ノンアルコール");
  expect(drinkNonAlcohol.isAlcohol).toBe(false);
  // アルコールでないドリンクは消費税割引される
  expect(drinkNonAlcohol.getTaxIncludedPrice()).toBe(
    Math.floor(298 * ((100 + 8) / 100))
  );
  expect(drinkAlcohol.name).toBe("アルコール");
  expect(drinkAlcohol.isAlcohol).toBe(true);
  // アルコールは消費税そのまま
  expect(drinkAlcohol.getTaxIncludedPrice()).toBe(
    Math.floor(298 * ((100 + 10) / 100))
  );
});
