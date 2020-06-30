import Product from "./Product";
export default class Drink extends Product {
  name: string;
  isAlcohol: boolean;
  consumptionTaxRate: number;

  constructor(
    productProperty: Omit<
      Product,
      "consumptionTaxRate" | "getTaxIncludedPrice"
    >,
    drinkProperty: Omit<Drink, keyof Product>
  ) {
    super(productProperty);
    this.name = drinkProperty.name;
    this.isAlcohol = drinkProperty.isAlcohol;
    this.consumptionTaxRate = drinkProperty.isAlcohol
      ? Product.DEFAULT_CONSUMPTION_TAX_RATE
      : Product.REDUCED_CONSUMPTION_TAX_RATE;
  }
}
