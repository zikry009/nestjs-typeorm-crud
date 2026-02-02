import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'post_db',
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    UsersModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
