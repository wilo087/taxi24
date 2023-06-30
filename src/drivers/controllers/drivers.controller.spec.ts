import { Test, TestingModule } from '@nestjs/testing'
import { DriversController } from './drivers.controller'
import { DriversService } from '../services/drivers.service'
import { PgDbService } from '@pgdb/pgdb.service'

describe('DriversController', () => {
  let controller: DriversController
  // let driverService: DriversService

  beforeEach(async () => {
    // driverService = new DriversService(PgDbService as any)
    // controller = new DriversController(driverService)

    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriversController],
      providers: [DriversService, PgDbService],
    }).compile()
    controller = module.get<DriversController>(DriversController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
