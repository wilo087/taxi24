import { Module } from '@nestjs/common'
import { DriversService } from './services/drivers.service'
import { DriversController } from './controllers/drivers.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  providers: [DriversService],
  controllers: [DriversController],
  exports: [DriversService],
  imports: [PrismaModule],
})

export class DriversModule { }
