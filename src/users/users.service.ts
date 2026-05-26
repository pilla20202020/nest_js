import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SafeUser } from './users.interface';

const SAFE_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  createdAt: true,
  updatedAt: true,
} as const;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<SafeUser> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: { ...createUserDto, password: hashedPassword },
      select: SAFE_USER_SELECT,
    });
  }

  async findAll(): Promise<SafeUser[]> {
    return this.prisma.user.findMany({
      select: SAFE_USER_SELECT,
    });
  }
}
