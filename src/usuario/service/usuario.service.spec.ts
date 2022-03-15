import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let usuarioRepository: Repository<Usuario>;

  const USUARIO_REPOSITORY_TOKEN = getRepositoryToken(Usuario);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: USUARIO_REPOSITORY_TOKEN,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    usuarioRepository = module.get<Repository<Usuario>>(
      USUARIO_REPOSITORY_TOKEN,
    );
  });

  describe('create', () => {
    it('should create a usuario', async () => {
      const usuario = new Usuario();
      usuario.nome = 'nome';
      usuario.telefone = 123456789;
      usuario.cpf = 123456789;
      usuario.cep = 12345678;
      usuario.logradouro = 'logradouro';
      usuario.cidade = 'cidade';
      usuario.estado = 'estado';

      const save = jest.fn().mockResolvedValue(usuario);
      usuarioRepository.save = save;

      const result: Usuario = await service.create(usuario);

      expect(result).toStrictEqual(usuario);
      expect(save).toHaveBeenCalledWith(usuario);
    });
  });

  describe('findAll', () => {
    it('should find all usuarios', async () => {
      const find = jest.fn().mockResolvedValue([new Usuario()]);
      usuarioRepository.find = find;

      const result: Usuario[] = await service.findAll();

      expect(result).toStrictEqual([new Usuario()]);
      expect(find).toHaveBeenCalled();
    });
  });

  describe('findByCPF', () => {
    it('should find a usuario by cpf', async () => {
      const findOne = jest.fn().mockResolvedValue(new Usuario());
      usuarioRepository.findOne = findOne;

      const result: Usuario = await service.findByCPF(123456789);

      expect(result).toStrictEqual(new Usuario());
      expect(findOne).toHaveBeenCalledWith(123456789);
    });
  });

  describe('updateByCPF', () => {
    it('should update a usuario by cpf', async () => {
      const usuario = new Usuario();
      usuario.nome = 'nome';
      usuario.telefone = 123456789;
      usuario.cpf = 123456789;
      usuario.cep = 12345678;
      usuario.logradouro = 'logradouro';
      usuario.cidade = 'cidade';
      usuario.estado = 'estado';

      const save = jest.fn().mockResolvedValue(usuario);
      usuarioRepository.update = save;

      const result = await service.updateByCPF(123456789, usuario);

      expect(result).toStrictEqual(usuario);
    });
  });

  describe('removeByCPF', () => {
    it('should remove a usuario by cpf', async () => {
      const usuario = new Usuario();
      usuario.nome = 'nome';
      usuario.telefone = 123456789;
      usuario.cpf = 123;
      usuario.cep = 12345678;
      usuario.logradouro = 'logradouro';
      usuario.cidade = 'cidade';
      usuario.estado = 'estado';

      const save = jest.fn().mockResolvedValue(usuario);
      usuarioRepository.save = save;

      await service.create(usuario);

      const remove = jest.fn().mockResolvedValue(1);
      usuarioRepository.delete = remove;

      const result = await service.removeByCPF(123);

      expect(result).toBe(1);
      expect(remove).toHaveBeenCalledWith({ cpf: 123 });
    });
  });
});
