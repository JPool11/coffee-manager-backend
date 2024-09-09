import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
>>>>>>> 6be785417168a9bcb2fb22750754f08a17043fb6
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WeighingsModule } from './weighings/weighings.module';

@Module({
  imports: [
<<<<<<< HEAD
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
=======
    // Importamos el ConfigModule
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente en toda la app
    }),
    // Configuramos el TypeOrmModule usando el ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UsersModule,
>>>>>>> 6be785417168a9bcb2fb22750754f08a17043fb6
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
