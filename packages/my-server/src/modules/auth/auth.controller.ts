import {
  Controller, Post, Redirect, Request, Response, UseGuards,
} from '@nestjs/common';
import express from 'express';

import AuthService from './auth.service';
import LocalAuthGuard from './strategies/local/guard';

@Controller('auth')
@UseGuards(LocalAuthGuard)
export default class AuthController {
  constructor(private authService: AuthService) { }

  @Post('local')
  @Redirect('/')
  async login(@Request() req: express.Request, @Response() res: express.Response) {
    const token = await this.authService.login(req.user);

    res.cookie('Authentication', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
  }
}
