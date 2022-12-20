import { rest } from 'msw';
import {
  mock_ai_page,
  mock_check_profit,
  mock_home,
  mock_profit_compare,
  mock_users,
} from './database';

export const handlers = [
  rest.post(`${process.env.REACT_APP_API}/api/auth/duplicate/email`, (req, res, ctx) => {
    const email = req.url.searchParams.get('value');
    return res(
      ctx.json({
        isExist: !mock_users.some((user) => user.email === email),
      })
    );
  }),
  rest.post(`${process.env.REACT_APP_API}/api/auth/duplicate/nickname`, (req, res, ctx) => {
    const nickname = req.url.searchParams.get('value');
    return res(
      ctx.json({
        isExist: !mock_users.some((user) => user.username === nickname),
      })
    );
  }),
  rest.post(`${process.env.REACT_APP_API}/api/auth/sign-up`, async (req, res, ctx) => {
    const { nickname, email, UID, loginType, accessToken } = await req.json();
    mock_users.push({
      uid: UID,
      username: nickname,
      socialType: loginType,
      email,
      createdAt: new Date().toISOString(),
    });
    return res(ctx.json({ accessToken, UID, isExistUser: true }));
  }),
  rest.get(`${process.env.REACT_APP_API}/api/auth/sign-in`, async (req, res, ctx) => {
    const loginType = req.url.searchParams.get('loginType');
    const authcode = req.url.searchParams.get('code');
    const tokens = await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&code=${authcode}&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=http://${window.location.host}/oauth?loginType=kakao`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );
    const { access_token, refresh_token, refresh_token_expires_in } = await tokens.json();
    const user = await fetch(`https://kapi.kakao.com/v2/user/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${access_token}`,
      },
    });
    const { id } = await user.json();
    console.log(mock_users);
    if (mock_users.some((user) => `${loginType}${id}` === user.uid)) {
      // make my token
      return res(
        ctx.json({ accessToken: access_token, UID: `${loginType}${id}`, isExistUser: true }),
        ctx.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          maxAge: refresh_token_expires_in,
        })
      );
    }
    return res(
      ctx.json({ accessToken: access_token, UID: `${loginType}${id}`, isExistUser: false })
    );
  }),
  rest.post(`${process.env.REACT_APP_API}/api/profit-compare`, (req, res, ctx) => {
    return res(ctx.json(mock_profit_compare));
  }),
  rest.post(`${process.env.REACT_APP_API}/api/checkprofit`, (req, res, ctx) => {
    return res(ctx.json(mock_check_profit));
  }),

  rest.post(`${process.env.REACT_APP_API}/api/home`, (req, res, ctx) => {
    return res(ctx.json(mock_home));
  }),

  rest.post(`${process.env.REACT_APP_API}/api/ai-page`, (req, res, ctx) => {
    return res(ctx.json(mock_ai_page));
  }),
];
