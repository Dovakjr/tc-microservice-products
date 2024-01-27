import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductRepositorySequelize } from './product.repository.impl.sequelize';
import { ProductModel } from '../models/product.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductModel])],
  providers: [ProductRepositorySequelize],
  exports: [ProductRepositorySequelize],
})
export class RepositoriesModule {}
