import Product from '../product/Product';
import Factory from '../product/ProductFactory';
import Pc from './Pc';

export default class PcFactory extends Factory {
  private pcList: Pc[];
  private last: number;

  constructor(lot: number) {
    super();
    this.pcList = new Array(lot);
    this.last = 0;
  }

  protected createProduct(id: string) {
    return new Pc(id);
  }

  protected registerProduct(product: Product) {
    this.pcList[this.last] = product as Pc;
    this.last++;
  }
}
