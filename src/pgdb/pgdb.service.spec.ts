import { Test, TestingModule } from '@nestjs/testing'
import { PgDbService } from './pgdb.service'

describe('PgDbService', () => {
  let service: PgDbService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PgDbService],
    }).compile()

    service = module.get<PgDbService>(PgDbService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
