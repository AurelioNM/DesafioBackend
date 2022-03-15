import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(usuario: Usuario) {
    return this.usuarioRepository.save(usuario);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findByCPF(cpf: number) {
    return this.usuarioRepository.findOne(cpf);
  }

  updateByCPF(cpf: number, usuario: Usuario) {
    return this.usuarioRepository.update({ cpf: cpf }, usuario);
  }

  removeByCPF(cpf: number) {
    return this.usuarioRepository.delete({ cpf: cpf });
  }
}
