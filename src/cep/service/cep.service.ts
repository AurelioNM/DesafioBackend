import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CepService {
  constructor(private httpService: HttpService) {}

  async getCep(cep: string) {
    return this.getJsonFromPublicAPI(cep);
  }

  async getJsonFromPublicAPI(cep: string) {
    const response = await this.httpService
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise();
    return response.data;
  }
}
