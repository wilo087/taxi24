import { Module } from '@nestjs/common'
import { PassengersController } from './controllers/passengers.controller'
import { PassengersService } from './services/passengers.service'
import { PgDbModule } from '@database/pgdb.module'
import { DriversModule } from '@drivers/drivers.module'

@Module({
  controllers: [PassengersController],
  providers: [PassengersService],
  imports: [PgDbModule, DriversModule],
})

export class PassengersModule { }
