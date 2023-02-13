import {
  Controller, Get, HttpCode, HttpStatus, Post, Redirect, Req, Request, Response, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import express from 'express';

import AuthService from './auth.service';
import LocalAuthGuard from './strategies/local/guard';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) { }

  @Post('local')
  @Redirect('/')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: express.Request, @Response() res: express.Response) {
    const token = await this.authService.login(req.user);

    res.cookie('Authentication', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
  }

  @Get('kakao')
  @HttpCode(200)
  @UseGuards(AuthGuard('kakao'))
  async kakaoLogin() {
    return HttpStatus.OK;
  }

  @Get('kakao/redirect')
  @HttpCode(200)
  @Redirect('/')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLoginCallback(@Request() req: express.Request, @Response() res: express.Response) {
    const token = await this.authService.login(req.user);

    res.cookie('Authentication', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
  }
}
