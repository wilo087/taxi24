import { Test, TestingModule } from '@nestjs/testing';
import { PgDBService } from './pgdb.service';

describe('PgDBService', () => {
  let service: PgDBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PgDBService],
    }).compile();

    service = module.get<PgDBService>(PgDBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
