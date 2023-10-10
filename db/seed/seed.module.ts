import { Module } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from 'src/artist/entity/album.entity/album.entity';
import { ArtistEntity } from 'src/artist/entity/artist.entity/artist.entity';
import { TrackEntity } from 'src/artist/entity/track.entity/track.entity';
import { UserEntity } from 'src/user/entity/user.entity/user.entity';
import { Repository } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ArtistEntity, UserEntity, AlbumEntity, TrackEntity])],
})

export class SeedModule {

    constructor( @InjectRepository(ArtistEntity)
    private artistRepository : Repository<ArtistEntity>,
    @InjectRepository(AlbumEntity)
    private albumEntity: Repository<AlbumEntity>,
    @InjectRepository(TrackEntity)
    private trackEntity: Repository<TrackEntity>)
    {
        
    }

    public async SeedArtist() : Promise<any>{

        const artist = new ArtistEntity();
        artist.name = 'Radiohead';

        const album = new AlbumEntity();
        album.name = 'In Rainbows';
        album.artist = artist;

        const track1 = new TrackEntity();
        track1.name = 'Nude';
        track1.artist = artist;
        track1.album = album;

        const track2 = new TrackEntity();
        track2.name = 'Weird fishes';
        track2.artist = artist;
        track2.album = album;

        if(await this.artistRepository.count() == 0){
            await this.artistRepository.insert(artist)
            await this.albumEntity.insert(album);
            await this.trackEntity.insert([track1, track2])
        }
    }
}
