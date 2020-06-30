import Product from "./Product";
export default class Book extends Product {
  consumptionTaxRate: number;
  title: string;
  author: string;

  constructor(
    productProperty: Omit<
      Product,
      "consumptionTaxRate" | "getTaxIncludedPrice"
    >,
    bookProperty: Omit<Book, keyof Product>
  ) {
    super(productProperty);
    this.title = bookProperty.title;
    this.author = bookProperty.author;
    this.consumptionTaxRate = Book.DEFAULT_CONSUMPTION_TAX_RATE;
  }
}
