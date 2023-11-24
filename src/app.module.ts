import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { DecimatorsModule } from './modules/decimators/decimators.module';

import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    //   isGlobal: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: process.env.DB_TYPE as "mysql" | "mariadb",
    //   host: process.env.DB_HOST,
    //   port: +process.env.DB_PORT,
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    UsersModule,
    DecimatorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
