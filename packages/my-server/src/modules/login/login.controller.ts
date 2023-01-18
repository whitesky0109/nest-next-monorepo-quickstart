import { Controller, Get, Render } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Render('login')
    @Get()
    async loginPage() {}
}
