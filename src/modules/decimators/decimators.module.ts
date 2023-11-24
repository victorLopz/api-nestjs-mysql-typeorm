import { Module } from '@nestjs/common';
import { DecimatorsService } from './decimators.service';
import { DecimatorsController } from './decimators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Decimator } from 'src/entities/decimator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Decimator])],
  controllers: [DecimatorsController],
  providers: [DecimatorsService],
})
export class DecimatorsModule {}
