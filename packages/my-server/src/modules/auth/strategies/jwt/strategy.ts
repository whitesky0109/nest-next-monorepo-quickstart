import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import AuthService from '../../auth.service';
import jwtConstants from '../../constants';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([(request) => request?.cookies?.Authentication]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const user = await this.authService.existUser(payload.username);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
