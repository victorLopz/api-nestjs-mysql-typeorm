import { IsNotEmpty, Max, Min, IsEmail } from 'class-validator';

export class CreateDecimatorDto {
  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  tithe_amount: number;

  @IsNotEmpty()
  tithe_date: string;

  @IsNotEmpty()
  method_of_payment: string;
}
