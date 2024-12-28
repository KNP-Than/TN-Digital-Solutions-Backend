import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  findAll(@Query() query: { keyword: string }) {
    return this.tripsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsService.findOne(id);
  }

  @Get('tag/:tag')
  findTag(@Param('tag') tag: string) {
    return this.tripsService.findByTag(tag);
  }
}
