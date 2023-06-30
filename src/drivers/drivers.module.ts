import { Module } from '@nestjs/common'
import { DriversService } from './services/drivers.service'
import { DriversController } from './controllers/drivers.controller'
import { PgDbModule } from '../pgdb/pgdb.module'

@Module({
  providers: [DriversService],
  controllers: [DriversController],
  exports: [DriversService],
  imports: [PgDbModule],
})

export class DriversModule { }
