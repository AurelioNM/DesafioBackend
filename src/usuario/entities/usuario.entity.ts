import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: number;

  @Column()
  cpf: number;

  @Column()
  cep: number;

  @Column()
  logradouro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;
}
