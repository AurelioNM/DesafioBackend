import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: Usuario) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.usuarioService.findByCPF(+cpf);
  }

  @Patch(':cpf')
  update(@Param('cpf') cpf: string, @Body() updateUsuarioDto: Usuario) {
    return this.usuarioService.updateByCPF(+cpf, updateUsuarioDto);
  }

  @Delete(':cpf')
  remove(@Param('cpf') cpf: string) {
    return this.usuarioService.removeByCPF(+cpf);
  }
}
