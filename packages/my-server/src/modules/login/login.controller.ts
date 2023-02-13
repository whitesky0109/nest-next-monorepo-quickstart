// import express from 'express';
import { Controller, Get, Render, Request, UseFilters } from '@nestjs/common';

import ViewAuthFilter from '../../filters/ViewAuthFilter';

@Controller('login')
@UseFilters(ViewAuthFilter)
export default class LoginController {
  @Get()
  @Render('login')
  // loginPage(@Request() _: express.Request) {
  loginPage() {
    return Promise.resolve();
  }
}
