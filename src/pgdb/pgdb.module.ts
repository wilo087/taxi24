import { Global, Module } from '@nestjs/common'
import { PgDbService } from './pgdb.service'

@Global()
@Module({
  providers: [PgDbService],
  exports: [PgDbService],
})

export class PgDbModule { }
