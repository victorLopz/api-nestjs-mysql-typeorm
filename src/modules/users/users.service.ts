import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRrepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userExist = await this.userRrepository.findOne({
      where: { email: createUserDto.email },
    });

    if (userExist)
      throw new HttpException(
        'El usuario con el email ' + createUserDto.email + ' ya existe',
        400,
      );

    const passwordNew = await bcrypt.hash(createUserDto.password, 10);

    const user = this.userRrepository.create({
      full_name: createUserDto.fullName,
      email: createUserDto.email,
      password: passwordNew,
    });

    await this.userRrepository.save(user);

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
