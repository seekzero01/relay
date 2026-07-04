import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {PrismaService} from "./prisma.service.js";
import { HealthModule } from './health/health.module.js';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HealthModule],
  providers: [PrismaService],
})
export class AppModule {}
