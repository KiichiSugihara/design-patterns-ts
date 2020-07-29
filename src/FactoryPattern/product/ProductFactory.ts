import Product from './Product';

export default abstract class Factory {
  create(id: string): Product {
    const product: Product = this.createProduct(id);
    this.registerProduct(product);

    return product;
  }

  protected abstract createProduct(id: string): Product;
  protected abstract registerProduct(product: Product): void;
}
