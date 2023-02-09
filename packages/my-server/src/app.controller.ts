import express from 'express';
import { Controller, Get, Render, UseGuards, Request, UseFilters } from '@nestjs/common';

import { JwtAuthGuard } from './modules/auth/strategies/jwt/guard';
import { ViewAuthFilter } from './filters/ViewAuthFilter';

@Controller()
@UseFilters(ViewAuthFilter)
@UseGuards(JwtAuthGuard)
export class AppController {
  @Get()
  @Render('home')
  public index(@Request() req: express.Request) {
    const { user = {} } = req as any;
    return { name: user.username };
  }
}
