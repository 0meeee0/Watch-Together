import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user-dto';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    try {
      const createUser = new this.userModel(createUserDto);
      return await createUser.save();
    } catch (e) {
      if (e.code === 11000) {
        throw new ConflictException('User Aldready Exists');
      }
      throw e;
    }
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async login(loginDto: LoginDto): Promise<UserDocument> {
    try {
      const { email } = loginDto;

      const user = await this.userModel.findOne({ email }).exec();

      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (e) {
      throw e;
    }
  }
}
