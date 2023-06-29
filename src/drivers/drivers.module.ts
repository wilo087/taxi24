import { Module } from '@nestjs/common'
import { DriversService } from './services/drivers.service'
import { DriversController } from './controllers/drivers.controller'
import { PrismaModule } from 'src/pgdb/pgdb.module'

@Module({
  providers: [DriversService],
  controllers: [DriversController],
  exports: [DriversService],
  imports: [PrismaModule],
})

export class DriversModule { }
