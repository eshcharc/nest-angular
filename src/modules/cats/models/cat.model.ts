import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 500 })
    name: string;

    @Column()
    age: number;

    @Column()
    height: number;
}