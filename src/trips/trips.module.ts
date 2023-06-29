import { Module } from '@nestjs/common'
import { TripsController } from './controllers/trips.controller'
import { TripsService } from './services/trips.service'
import { PgDbModule } from 'src/pgdb/pgdb.module'

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  exports: [TripsService],
  imports: [PgDbModule],
})

export class TripsModule { }
