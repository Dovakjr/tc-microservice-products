import { IProductRepository } from '../../domain/product.repository'; // Importe a interface do repositório
import { Product } from '../../domain/product.entity'; // Importe a entidade do usuário

export class DeleteProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(id: number): Promise<Product> {
    return this.productRepository.delete(id);
  }
}
