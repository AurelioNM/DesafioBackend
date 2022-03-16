import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import * as redisStore from 'cache-manager-redis-store';
import { CepController } from './cep/controller/cep.controller';
import { CepService } from './cep/service/cep.service';

@Module({
  imports: [
    UsuarioModule,
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pgdb',
      entities: [Usuario],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [CepController],
  providers: [CepService],
})
export class AppModule {}
