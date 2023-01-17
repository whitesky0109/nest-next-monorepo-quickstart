import {
  Controller,
  // rest
  Get, Post,
  // view
  Render,
  // params
  Query,
  //auth
  Request, UseGuards, 
} from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
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

  @UseGuards(LocalAuthGuard)
  @Post('auth/login/local')
  async login(@Request() req) {
    return req.user;
  }
}
