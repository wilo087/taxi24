// import { Test, TestingModule } from '@nestjs/testing'
import { DriversService } from './drivers.service'
import { PgDbService } from '../../pgdb/pgdb.service'

describe('DriversService', () => {
  let service: DriversService

  beforeEach(async () => {
    service = new DriversService(PgDbService as any)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
