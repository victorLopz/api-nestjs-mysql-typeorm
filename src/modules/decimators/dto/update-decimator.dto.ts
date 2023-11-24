import { PartialType } from '@nestjs/mapped-types';
import { CreateDecimatorDto } from './create-decimator.dto';

export class UpdateDecimatorDto extends PartialType(CreateDecimatorDto) {}
