import { Module } from '@nestjs/common'
import { TripsController } from './controllers/trips.controller'
import { TripsService } from './services/trips.service'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  exports: [TripsService],
  imports: [PrismaModule],
})

export class TripsModule { }
