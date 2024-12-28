import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async getPosts(): Promise<any> {
    const response$ = this.httpService.get('http://localhost:9000/trips');
    const response = await lastValueFrom(response$);
    return response.data;
  }
}
