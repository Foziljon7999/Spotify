import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm'
import { AlbumsModule } from 'src/albums/albums.module';
import { Album } from 'src/albums/entities/album.entity';
import { ArstistsModule } from 'src/arstists/arstists.module';
import { Artist } from 'src/arstists/entities/arstist.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1111',
      database: 'spotify',
      entities: [User, Artist, Album],
      synchronize: true,
    }),
    UsersModule,
    ArstistsModule, 
    AlbumsModule
  ],
})
export class AppModule {}
