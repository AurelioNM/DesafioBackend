import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from '../service/cep.service';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get(':cep')
  getCep(@Param('cep') cep: string) {
    return this.cepService.getCep(cep);
  }
}
