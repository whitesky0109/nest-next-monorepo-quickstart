import express from 'express';
import { Controller, Get, Render, Request, UseFilters } from '@nestjs/common';

import { ViewAuthFilter } from '../../filters/ViewAuthFilter';

@Controller('login')
@UseFilters(ViewAuthFilter)
export class LoginController {

  @Get()
  @Render('login')
  loginPage(
    @Request() req: express.Request,
  ) { 
    return Promise.resolve();
  }
}
