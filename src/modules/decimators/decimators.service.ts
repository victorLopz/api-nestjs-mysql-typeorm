import { Injectable } from '@nestjs/common';
import { CreateDecimatorDto } from './dto/create-decimator.dto';
import { UpdateDecimatorDto } from './dto/update-decimator.dto';
import { Decimator } from 'src/entities/decimator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DecimatorsService {
  constructor(
    @InjectRepository(Decimator)
    private decimatorRepository: Repository<Decimator>,
  ) {}

  async create(createDecimatorDto: CreateDecimatorDto) {
    // crear un nuevo decimator
    const newDecimator = this.decimatorRepository.create(createDecimatorDto);
    // guardar el decimator en la base de datos
    await this.decimatorRepository.save(newDecimator);
    // retornar el decimator recien creado
    return newDecimator;
  }

  findAll() {
    return `This action returns all decimators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} decimator`;
  }

  update(id: number, updateDecimatorDto: UpdateDecimatorDto) {
    return `This action updates a #${id} decimator`;
  }

  remove(id: number) {
    return `This action removes a #${id} decimator`;
  }
}
