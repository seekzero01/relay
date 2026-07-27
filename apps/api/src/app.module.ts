import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { HealthModule } from './core/health/health.module.js';
import {DatabaseModule} from "./core/database/database.module.js";
import {AuthModule} from "@thallesp/nestjs-better-auth";
import {auth} from "@repo/auth/server";
import {SessionsService} from "./core/auth/sessions.service.js";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HealthModule, DatabaseModule, AuthModule.forRoot({ auth })],
  providers: [SessionsService],
})
export class AppModule {}
