import { IProductRepository } from '../../domain/product.repository'; // Importe a interface do repositório
import { Product } from '../../domain/product.entity'; // Importe a entidade do usuário

export class FindAllProductsUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
