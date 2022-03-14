import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: Usuario) {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findByCPF(cpf: number) {
    return this.usuarioRepository.findOne(cpf);
  }

  updateByCPF(cpf: number, updateUsuarioDto: Usuario) {
    return this.usuarioRepository.update({ cpf: cpf }, updateUsuarioDto);
  }

  removeByCPF(cpf: number) {
    return this.usuarioRepository.delete({ cpf: cpf });
  }
}
