import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Repository} from 'typeorm'
import {User} from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  


constructor(
  @InjectRepository(User) private userRepository: Repository<User>,){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    
    return await this.userRepository.save(newUser);
    
   
  }

  findAll() {


    return this.userRepository.find();
  }

  findOne(id: number) {

    return this.userRepository.findOne(id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
