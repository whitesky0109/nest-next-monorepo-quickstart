import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Strategy } from 'passport-kakao';

import AuthService from '../../auth.service';

@Injectable()
export default class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      clientID: '983a6749ac20c97d5b8d7060ab32fdb5',
      // clientSecret: '',
      callbackURL: 'http://localhost:3000/auth/kakao/redirect'
    });
  }

  async validate(accessToken, refreshToken, profile, done): Promise<any> {
    // eslint-disable-next-line no-underscore-dangle
    const profileJson = profile._json;
    const kakaoAccount = profileJson.kakao_account;

    const payload = {
      username: kakaoAccount.profile.kakao_account as any,
      kakaoId: profileJson.id,
      sub: profileJson.id,
      email: kakaoAccount.has_email && kakaoAccount.email_needs_agreement
        ? kakaoAccount.email
        : null,
    };
    done(null, payload);
  }
}
