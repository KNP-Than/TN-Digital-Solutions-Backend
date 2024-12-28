import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TripsModule],
})
export class AppModule {}
