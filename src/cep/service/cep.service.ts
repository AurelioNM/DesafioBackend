import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CepService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  private httpService: HttpService = new HttpService();

  async getCep(cep: string) {
    const value = await this.cacheManager.get(cep);
    if (value) {
      return value;
    }

    return this.getJsonFromPublicAPI(cep);
  }

  async getJsonFromPublicAPI(cep: string) {
    const response = await this.httpService
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise();

    this.setCepRedis(cep, response.data);
    return response.data;
  }

  async setCepRedis(cep: string, data: any) {
    await this.cacheManager.set(cep, data, { ttl: 7200000 });
  }
}
