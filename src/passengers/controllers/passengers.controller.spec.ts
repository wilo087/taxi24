import { Test, TestingModule } from '@nestjs/testing'
import { DriversService } from '@drivers/services/drivers.service'
import { PassengersController } from './passengers.controller'
import { PassengersService } from '../services/passengers.service'
import { PgDbService } from '../../pgdb/pgdb.service'

describe('PassengersController', () => {
  let controller: PassengersController
  // let passengerService: PassengersService
  // let driversService: DriversService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassengersController],
      providers: [PassengersService, PgDbService, DriversService],
    }).compile()

    controller = module.get<PassengersController>(PassengersController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
