import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import UsersModule from '../users/users.module';

import AuthController from './auth.controller';
import AuthService from './auth.service';
import jwtConstants from './constants';
import LocalStrategy from './strategies/local/strategy';
import JwtStrategy from './strategies/jwt/strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export default class AuthModule {}
