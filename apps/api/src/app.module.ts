import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { HealthModule } from './core/health/health.module.js';
import {DatabaseModule} from "./core/database/database.module.js";
import {AuthModule} from "@thallesp/nestjs-better-auth";
import {auth} from "@repo/auth/server";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HealthModule, DatabaseModule, AuthModule.forRoot({ auth })],
})
export class AppModule {}
