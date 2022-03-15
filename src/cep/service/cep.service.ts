import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CepService {
  constructor(private httpService: HttpService) {}

  CEP_URL = 'https://viacep.com.br/ws/01001000/json/';

  async getCep() {
    return this.getJsonFromPublicAPI();
  }

  async getJsonFromPublicAPI() {
    const response = await this.httpService.get(this.CEP_URL).toPromise();
    return response.data;
  }
}
