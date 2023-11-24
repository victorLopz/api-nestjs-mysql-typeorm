import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'decimators' })
export class Decimator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  full_name: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  tithe_amount: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  tithe_date: string;

  @Column({ length: 100, nullable: true })
  method_of_payment: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
