import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './entities/album.entity';
import { CreateAlbumDto } from './dto/create-album.dto';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumsRepository: Repository<Album>,
  ) {}

  create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const album = this.albumsRepository.create(createAlbumDto);
    return this.albumsRepository.save(album);
  }

  findAll(): Promise<Album[]> {
    return this.albumsRepository.find({ relations: ['artist_id'] });
  }

  findOne(id: number): Promise<Album> {
    return this.albumsRepository.findOne({
      where: { id },
      relations: ['artist_id'],
    });
  }

  async update(id: number, userData: Partial<Album>): Promise<Album> {
    await this.albumsRepository.update(id, userData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.albumsRepository.delete(id);
  }
}
