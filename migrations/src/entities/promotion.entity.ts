import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 360, unique: true })
  email: string;

  @Column('varchar', { length: 250, nullable: true })
  name: string;

  @Column('varchar', { length: 15, name: 'promo_code', nullable: true })
  promoCode: string;

  @Column('integer')
  status: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
