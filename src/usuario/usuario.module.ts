import { Module } from '@nestjs/common';
import { UsuarioService } from './service/usuario.service';
import { UsuarioController } from './controller/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { CepController } from 'src/cep/controller/cep.controller';
import { CepService } from 'src/cep/service/cep.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController, CepController],
  providers: [UsuarioService, CepService],
})
export class UsuarioModule {}
