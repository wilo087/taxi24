import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DriversModule } from './drivers/drivers.module';
import { PassengersModule } from './passengers/passengers.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [PrismaModule, DriversModule, PassengersModule, TripsModule],
  // controllers: [AppController],
  // providers: [AppService],
})

export class AppModule { }
