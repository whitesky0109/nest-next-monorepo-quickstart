import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import AppController from './app.controller';
import BlogController from './modules/blog/blog.controller';
import BlogService from './modules/blog/blog.service';
import AuthModule from './modules/auth/auth.module';
import UsersModule from './modules/users/users.module';
import LoginModule from './modules/login/login.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
      }),
    ),
    AuthModule,
    UsersModule,
    LoginModule,
  ],
  controllers: [AppController, BlogController],
  providers: [BlogService],
})
export default class AppModule {}
