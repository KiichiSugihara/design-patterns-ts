import Product from '../product/Product';

export default class Pc extends Product {
  private id: string;

  constructor(id: string) {
    super();
    console.log('製造番号' + id + 'のPCを製造します。');
    this.id = id;
  }

  check(): string {
    return ('製造番号' + this.id + 'のPCは正常に動作しています。')
  }
}
