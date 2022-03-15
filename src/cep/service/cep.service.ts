import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CepService {
  async getCepFromPublicApi() {
    const httpService = new HttpService();
    const response = await httpService
      .get('https://viacep.com.br/ws/01001000/json/')
      .toPromise();
    return response.data;
  }
}
