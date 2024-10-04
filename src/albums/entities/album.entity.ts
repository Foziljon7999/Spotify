import { Artist } from "src/arstists/entities/arstist.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity("Albums")
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ type: 'date', nullable: true})
    release_date: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMPT'})
    createdAt: Date

    @ManyToOne(() => Artist, artist => artist.albums)
    @JoinColumn({ name: 'artist_id'})
    artist: Artist
}