import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

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
export class AppModule {}
