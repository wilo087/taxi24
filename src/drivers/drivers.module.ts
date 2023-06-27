import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [DriversService],
  controllers: [DriversController],
  exports: [DriversService],
  imports: [PrismaModule],
})
export class DriversModule {}
