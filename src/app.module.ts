import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './infrastructure/config/db.config';
import { ProductsModule } from './presentations/products.module';

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
