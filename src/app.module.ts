import { Module } from '@nestjs/common';
import { PgDbModule } from './pgdb/pgdb.module';
import { DriversModule } from './drivers/drivers.module';
import { PassengersModule } from './passengers/passengers.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [PgDbModule, DriversModule, PassengersModule, TripsModule],
  // controllers: [AppController],
  // providers: [AppService],
})

export class AppModule { }
