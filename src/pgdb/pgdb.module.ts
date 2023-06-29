import { Module } from '@nestjs/common';
import { PgDBService } from './pgdb.service';

@Module({
  providers: [PgDBService],
  exports: [PgDBService],
})

export class PgDbModule { }
