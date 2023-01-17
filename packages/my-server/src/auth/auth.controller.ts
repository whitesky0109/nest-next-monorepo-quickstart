import {
    Controller, Post, Request, UseGuards, 
  } from '@nestjs/common';
  
  import { LocalAuthGuard } from './strategies/local/guard';
  
  @Controller('auth')
  export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('/login/local')
    async login(@Request() req) {
      return req.user;
    }
  }
  