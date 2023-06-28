import { Module } from '@nestjs/common'
import { PassengersController } from './controllers/passengers.controller'
import { PassengersService } from './services/passengers.service'

@Module({
  controllers: [PassengersController],
  providers: [PassengersService]
})

export class PassengersModule { }
