import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  full_name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ default: 1 })
  status: number;

  @Column({ default: 1 })
  reset_password: number;

  @Column({ length: 100, nullable: true })
  auth_strategy: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
