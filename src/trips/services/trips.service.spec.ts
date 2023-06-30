// import { Test, TestingModule } from '@nestjs/testing';
import { TripsService } from './trips.service'
import { PgDbService } from '../../pgdb/pgdb.service'

describe('TripsService', () => {
  let service: TripsService

  beforeEach(async () => {
    service = new TripsService(PgDbService as any)
  })
  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [TripsService],
  //   }).compile();

  //   service = module.get<TripsService>(TripsService);
  // });

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
