import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

describe('UsuarioController', () => {
  let controller: UsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        UsuarioService,
        {
          provide: getRepositoryToken(Usuario),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
