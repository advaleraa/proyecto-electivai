import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MD5 } from 'crypto-js';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async create(createUserDto: CreateUserDto) {
    const userExists = await this.findOneByEmail(createUserDto.email);
    if (userExists) {
      throw new BadRequestException('Email already exists');
    }
    const newUser = Object.assign({}, createUserDto);
    newUser.password = MD5(newUser.password).toString();
    return this.userRepo.save(newUser);
  }

  async findOneByEmail(email: string) {
    // console.log('findOne');
    return await this.userRepo.findOneBy({ email });
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOneBy({ id });
    this.userRepo.merge(user, updateUserDto);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.softDelete(id);
  }
}
