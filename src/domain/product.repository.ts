import { Product } from './product.entity';
export interface IProductRepository {
  create(product: Product): Promise<Product>;
  update(id: number, product: Product): Promise<Product>;
  delete(id: number): Promise<Product>;
  findAll(): Promise<Product[]>;
  findByType(type: string): Promise<Product[]>;
  findByPk(id: number): Promise<Product>;
}
