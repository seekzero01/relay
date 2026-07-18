import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { HealthModule } from './core/health/health.module.js';
import {DatabaseModule} from "./core/database/database.module.js";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HealthModule, DatabaseModule],
})
export class AppModule {}
