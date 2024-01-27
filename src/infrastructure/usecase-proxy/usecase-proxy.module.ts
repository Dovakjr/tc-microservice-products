import { DynamicModule, Module } from '@nestjs/common';
import { UseCaseProxy } from './usecase-proxy';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ProductRepositorySequelize } from '../repositories/product.repository.impl.sequelize';
import { CreateProductUseCase } from 'src/application/use-cases/create-product.use-case';
import { FindAllProductsUseCase } from 'src/application/use-cases/find-all-products.use-case';
import { FindOneProductUseCase } from 'src/application/use-cases/find-one-products.use-case';
import { FindProductByTypeUseCase } from 'src/application/use-cases/find-product-by-type.use-case';
import { UpdateProductUseCase } from 'src/application/use-cases/update-product.use-case';
import { DeleteProductUseCase } from 'src/application/use-cases/delete-product.use-case';

@Module({
  imports: [RepositoriesModule],
})
export class UsecaseProxyModule {
  //PRODUCT
  static CREATE_PRODUCT_USE_CASE = 'createProductUseCaseProxy';
  static FIND_ALL_PRODUCTS_USE_CASE = 'findAllProductsUseCaseProxy';
  static FIND_ONE_PRODUCT_USE_CASE = 'findOneProductUseCaseProxy';
  static FIND_PRODUCT_BY_TYPE_USE_CASE = 'findProductByTypeUseCaseProxy';
  static UPDATE_PRODUCT_USE_CASE = 'updateProductUseCaseProxy';
  static DELETE_PRODUCT_USE_CASE = 'deleteProductUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UsecaseProxyModule,
      providers: [
        {
          inject: [ProductRepositorySequelize],
          provide: UsecaseProxyModule.CREATE_PRODUCT_USE_CASE,
          useFactory: (productRepository: ProductRepositorySequelize) =>
            new UseCaseProxy(new CreateProductUseCase(productRepository)),
        },
        {
          inject: [ProductRepositorySequelize],
          provide: UsecaseProxyModule.FIND_ALL_PRODUCTS_USE_CASE,
          useFactory: (productRepository: ProductRepositorySequelize) =>
            new UseCaseProxy(new FindAllProductsUseCase(productRepository)),
        },
        {
          inject: [ProductRepositorySequelize],
          provide: UsecaseProxyModule.FIND_ONE_PRODUCT_USE_CASE,
          useFactory: (productRepository: ProductRepositorySequelize) =>
            new UseCaseProxy(new FindOneProductUseCase(productRepository)),
        },
        {
          inject: [ProductRepositorySequelize],
          provide: UsecaseProxyModule.FIND_PRODUCT_BY_TYPE_USE_CASE,
          useFactory: (productRepository: ProductRepositorySequelize) =>
            new UseCaseProxy(new FindProductByTypeUseCase(productRepository)),
        },
        {
          inject: [ProductRepositorySequelize],
          provide: UsecaseProxyModule.UPDATE_PRODUCT_USE_CASE,
          useFactory: (productRepository: ProductRepositorySequelize) =>
            new UseCaseProxy(new UpdateProductUseCase(productRepository)),
        },
        {
          inject: [ProductRepositorySequelize],
          provide: UsecaseProxyModule.DELETE_PRODUCT_USE_CASE,
          useFactory: (productRepository: ProductRepositorySequelize) =>
            new UseCaseProxy(new DeleteProductUseCase(productRepository)),
        },
      ],
      exports: [
        UsecaseProxyModule.CREATE_PRODUCT_USE_CASE,
        UsecaseProxyModule.FIND_ALL_PRODUCTS_USE_CASE,
        UsecaseProxyModule.FIND_ONE_PRODUCT_USE_CASE,
        UsecaseProxyModule.FIND_PRODUCT_BY_TYPE_USE_CASE,
        UsecaseProxyModule.UPDATE_PRODUCT_USE_CASE,
        UsecaseProxyModule.DELETE_PRODUCT_USE_CASE,
      ],
    };
  }
}
