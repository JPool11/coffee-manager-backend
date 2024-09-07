import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FarmsModule } from './farms/farms.module';

@Module({
  imports: [UsersModule,FarmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
