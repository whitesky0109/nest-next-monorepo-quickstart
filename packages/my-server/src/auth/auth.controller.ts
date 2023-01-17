import {
  Controller, Get, Post, Request, UseGuards, 
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './strategies/jwt/guard';
import { LocalAuthGuard } from './strategies/local/guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login/local')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
