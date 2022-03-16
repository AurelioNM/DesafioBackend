import { UsuarioService } from './service/usuario.service';
import { UsuarioController } from './controller/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
//add appmodule
@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), HttpModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
