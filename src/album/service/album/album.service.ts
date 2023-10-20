import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from '../../entity/album.entity/album.entity';
import { Repository } from 'typeorm';
import { mapper } from '../../../mapper';
import { AlbumDto } from '../../dto/album.dto/album.dto';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private albumEntityRepository: Repository<AlbumEntity>,
  ) {}

  public async GetAlbums(artistId: number): Promise<AlbumDto[]> {
    const [qb] = await Promise.all([
      this.albumEntityRepository.createQueryBuilder('album'),
    ]);

    qb.where('album.artistId = :id', { id: artistId });

    const test = await qb.getMany();
    return mapper.mapArray(test, AlbumEntity, AlbumDto);
  }
}
