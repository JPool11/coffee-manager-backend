import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa la entidad User para usarla con TypeORM
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
