import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';

@Injectable()
export class TripsService {
  constructor(private readonly apiService: ApiService) {}
  async findAll(query: { keyword: string }) {
    const data = await this.apiService.getPosts();
    if (query.keyword) {
      return data.filter(
        (trip) =>
          trip.title.includes(query.keyword) ||
          trip.description.includes(query.keyword),
      );
    } else {
      return data;
    }
  }

  async findByTag(tag: string) {
    const data = await this.apiService.getPosts();
    if (tag) {
      return data.filter((trip) => {
        return trip.tags.some((i) => i === tag);
      });
    }
  }

  async findOne(id: string) {
    const data = await this.apiService.getPosts();
    if (id) {
      return data.filter((trip) => trip.eid === id);
    } else {
      return {};
    }
  }
}
