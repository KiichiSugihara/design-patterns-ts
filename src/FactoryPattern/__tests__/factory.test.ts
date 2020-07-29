import Factory from '../product/ProductFactory';
import Product from '../product/Product';
import PcFactory from '../pc/PcFactory';

const factory: Factory = new PcFactory(3);

const pc1: Product = factory.create('1');



test("PcFactory", () => {
  // unique Property
  expect(pc1.check()).toBe("製造番号1のPCは正常に動作しています。");

});
