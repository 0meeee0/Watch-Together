import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async create(createUserDto: CreateUserDto): Promise<UserDocument> {
        const createUser = new this.userModel(createUserDto)
        return createUser.save()
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }
}
