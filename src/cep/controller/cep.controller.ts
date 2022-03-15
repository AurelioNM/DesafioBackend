import { Controller, Get } from '@nestjs/common';
import { CepService } from '../service/cep.service';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}
  @Get()
  getHello() {
    return this.cepService.getCepFromPublicApi();
  }
}
