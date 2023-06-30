import { Test, TestingModule } from '@nestjs/testing'
import { PassengersService } from './passengers.service'
import { PgDbService } from '@pgdb/pgdb.service'

describe('PassengersService', () => {
  let service: PassengersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassengersService, PgDbService],
    }).compile()

    service = module.get<PassengersService>(PassengersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
