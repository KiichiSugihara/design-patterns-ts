export default abstract class Product {
  productCode: string;
  unitPrice: number;
  protected static DEFAULT_CONSUMPTION_TAX_RATE = 10;
  protected static REDUCED_CONSUMPTION_TAX_RATE = 8;

  abstract consumptionTaxRate: number;

  constructor(
    arg: Omit<Product, "consumptionTaxRate" | "getTaxIncludedPrice">
  ) {
    this.productCode = arg.productCode;
    this.unitPrice = arg.unitPrice;
  }

  getTaxIncludedPrice(): number {
    return Math.floor(this.unitPrice * ((100 + this.consumptionTaxRate) / 100));
  }
}
