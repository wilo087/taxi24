import { Module } from '@nestjs/common'
import { PassengersController } from './controllers/passengers.controller'
import { PassengersService } from './services/passengers.service'
import { PgDbModule } from '../pgdb/pgdb.module'
import { DriversModule } from '../drivers/drivers.module'

@Module({
  imports: [PgDbModule, DriversModule],
  controllers: [PassengersController],
  providers: [PassengersService],
})

export class PassengersModule { }
