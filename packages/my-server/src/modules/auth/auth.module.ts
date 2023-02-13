import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import UsersModule from '../users/users.module';

import AuthController from './auth.controller';
import AuthService from './auth.service';
import jwtConstants from './constants';
import JwtStrategy from './strategies/jwt/strategy';
import KakaoStrategy from './strategies/kakao/strategy';
import LocalStrategy from './strategies/local/strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, KakaoStrategy],
  controllers: [AuthController],
})
export default class AuthModule { }
