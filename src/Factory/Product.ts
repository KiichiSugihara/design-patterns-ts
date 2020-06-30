export default class Product {
  productCode: string;
  title: string;
  author: string;
  unitPrice: number;
  private static CONSUMPTION_TAX_RATE = 10;

  constructor(arg: Omit<Product, "getTaxIncludedPrice">) {
    this.productCode = arg.productCode;
    this.title = arg.title;
    this.author = arg.author;
    this.unitPrice = arg.unitPrice;
  }

  getTaxIncludedPrice(): number {
    return Math.floor(
      this.unitPrice * ((100 + Product.CONSUMPTION_TAX_RATE) / 100)
    );
  }
}
