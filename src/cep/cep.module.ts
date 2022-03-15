import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CepService } from './service/cep.service';

@Module({
  imports: [HttpModule],
  providers: [CepService],
})
export class CepModule {}
