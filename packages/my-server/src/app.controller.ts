import { Controller, Get, Render, Query, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from './auth/strategies/jwt/guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class AppController {
  @Render('home')
  @Get()
  public index(@Query('name') name?: string) {
    return { name };
  }

  @Render('about')
  @Get('/about')
  public about() {
    return {};
  }
}
