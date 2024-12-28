import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  controllers: [TripsController],
  providers: [TripsService, ApiService],
  imports: [HttpModule],
})
export class TripsModule {}
