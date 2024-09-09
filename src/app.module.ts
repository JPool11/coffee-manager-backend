import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WeighingsModule } from './weighings/weighings.module';

@Module({
  imports: [
    // Cargar las variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,  // Hace que las variables de entorno estén disponibles globalmente
    }),

    // Configuración de TypeORM con variables de entorno
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],  // Importar el módulo de configuración
      inject: [ConfigService],  // Inyectar ConfigService para acceder a las variables
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Cargar las entidades
        synchronize: false,  // Solo en desarrollo; en producción se debe desactivar
      }),
    }),

    UsersModule,

    WeighingsModule,  // Tu módulo de usuarios
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
