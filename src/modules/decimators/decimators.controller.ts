import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DecimatorsService } from './decimators.service';
import { CreateDecimatorDto } from './dto/create-decimator.dto';
import { UpdateDecimatorDto } from './dto/update-decimator.dto';
import { ValidationPipe } from 'src/utils/validación.pipe';

@Controller('decimators')
export class DecimatorsController {
  constructor(private readonly decimatorsService: DecimatorsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createDecimatorDto: CreateDecimatorDto) {
    return this.decimatorsService.create(createDecimatorDto);
  }

  @Get()
  findAll() {
    return this.decimatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decimatorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDecimatorDto: UpdateDecimatorDto) {
    return this.decimatorsService.update(+id, updateDecimatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.decimatorsService.remove(+id);
  }
}
