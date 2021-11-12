import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Promotion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {length: 360})
  email: string;

  @Column('varchar', {length: 250})
  name: string;

  @Column('varchar', {length: 15, name: 'promo_code'})
  promoCode: string;

  @Column('varchar', {length: 360})
  status: number;

  @CreateDateColumn({name: 'create_at'})
  createAt: Date;
}